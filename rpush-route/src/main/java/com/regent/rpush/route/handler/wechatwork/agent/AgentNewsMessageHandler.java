package com.regent.rpush.route.handler.wechatwork.agent;

import cn.hutool.core.exceptions.ExceptionUtil;
import com.regent.rpush.common.SingletonUtil;
import com.regent.rpush.dto.enumration.MessageType;
import com.regent.rpush.dto.message.config.Config;
import com.regent.rpush.dto.message.config.WechatWorkAgentConfig;
import com.regent.rpush.dto.message.wechatwork.agent.ArticleDTO;
import com.regent.rpush.dto.message.wechatwork.agent.NewsMessageDTO;
import com.regent.rpush.route.handler.MessageHandler;
import com.regent.rpush.route.model.RpushMessageHisDetail;
import com.regent.rpush.route.service.IRpushTemplateReceiverGroupService;
import me.chanjar.weixin.cp.api.impl.WxCpServiceImpl;
import me.chanjar.weixin.cp.bean.article.NewArticle;
import me.chanjar.weixin.cp.bean.message.WxCpMessage;
import me.chanjar.weixin.cp.config.impl.WxCpDefaultConfigImpl;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * 企业微信图文消息handler
 *
 * @author 钟宝林
 * @since 2021/4/7/007 17:28
 **/
@Component
public class AgentNewsMessageHandler extends MessageHandler<NewsMessageDTO> {
    private final static Logger LOGGER = LoggerFactory.getLogger(AgentNewsMessageHandler.class);

    @Autowired
    private IRpushTemplateReceiverGroupService rpushTemplateReceiverGroupService;

    @Override
    public MessageType messageType() {
        return MessageType.WECHAT_WORK_AGENT_NEWS;
    }

    @Override
    public void handle(NewsMessageDTO param) {
        List<Config> configs = param.getConfigs();
        for (Config conf : configs) {
            WechatWorkAgentConfig config = (WechatWorkAgentConfig) conf;
            Set<String> receiverUsers = rpushTemplateReceiverGroupService.listReceiverIds(param.getReceiverGroupIds()); // 先拿参数里分组的接收人
            if (param.getReceiverIds() != null) {
                receiverUsers.addAll(param.getReceiverIds());
            }

            if (receiverUsers.size() <= 0) {
                LOGGER.warn("请求号：{}，消息配置：{}。没有检测到接收用户", param.getRequestNo(), param.getConfigs());
                return;
            }

            WxCpServiceImpl wxCpService = SingletonUtil.get(config.getCorpId() + config.getSecret() + config.getAgentId(), () -> {
                WxCpDefaultConfigImpl cpConfig = new WxCpDefaultConfigImpl();
                cpConfig.setCorpId(config.getCorpId());
                cpConfig.setCorpSecret(config.getSecret());
                cpConfig.setAgentId(config.getAgentId());
                WxCpServiceImpl wxCpService1 = new WxCpServiceImpl();
                wxCpService1.setWxCpConfigStorage(cpConfig);
                return wxCpService1;
            });

            for (String receiverUser : receiverUsers) {
                RpushMessageHisDetail hisDetail = RpushMessageHisDetail.builder()
                        .platform(messageType().getPlatform().name())
                        .messageType(messageType().name())
                        .configName(config.getConfigName())
                        .receiverId(receiverUser)
                        .requestNo(param.getRequestNo())
                        .configId(config.getConfigId())
                        .build();
                List<ArticleDTO> articlesParam = param.getArticles();
                List<NewArticle> articles = new ArrayList<>();
                for (ArticleDTO article : articlesParam) {
                    NewArticle newArticle = new NewArticle();
                    BeanUtils.copyProperties(article, newArticle);
                    articles.add(newArticle);
                }

                WxCpMessage message = WxCpMessage.NEWS()
                        .agentId(config.getAgentId()) // 企业号应用ID
                        .toUser(receiverUser)
                        .toParty(param.getToParty())
                        .toTag(param.getToTag())
                        .articles(articles)
                        .build();
                try {
                    wxCpService.getMessageService().send(message);
                    hisDetail.setSendStatus(RpushMessageHisDetail.SEND_STATUS_SUCCESS);
                } catch (Exception e) {
                    String eMessage = ExceptionUtil.getMessage(e);
                    eMessage = StringUtils.isBlank(eMessage) ? "未知错误" : eMessage;
                    hisDetail.setSendStatus(RpushMessageHisDetail.SEND_STATUS_FAIL);
                    hisDetail.setErrorMsg(eMessage);
                }
                rpushMessageHisService.logDetail(hisDetail);
            }
        }
    }
}