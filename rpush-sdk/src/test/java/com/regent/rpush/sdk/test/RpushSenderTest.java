package com.regent.rpush.sdk.test;

import com.regent.rpush.dto.message.EmailMessageDTO;
import com.regent.rpush.dto.message.wechatofficialaccount.TextMessageDTO;
import com.regent.rpush.dto.message.wechatwork.agent.MarkdownMessageDTO;

import com.regent.rpush.sdk.RpushMessage;
import com.regent.rpush.sdk.RpushService;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * @author 钟宝林
 * @since 2021/6/8/008 11:37
 **/
public class RpushSenderTest {

    public static void main(String[] args) {
        String content = "您的会议室已经预定 \n" +
                ">**事项详情** \n" +
                ">事　项：开会\n" +
                ">组织者：@liuzy \n" +
                ">参与者：@ks \n" +
                "> \n" +
                ">会议室：昆山 1楼 301\n" +
                ">日　期：2023年1月15日\n" +
                ">时　间：上午9:00-11:00\n" +
                "> \n" +
                ">请准时参加会议。 \n" +
                "> \n" +
                ">如需修改会议信息，请点击：[修改会议信息](https://work.weixin.qq.com)";

        // 企业微信-markdown消息
        // MarkdownMessageDTO markdown = RpushMessage.WECHAT_WORK_AGENT_MARKDOWN().content(content).receiverIds(Collections.singletonList("oRtpyuKw6ZElNELuenaGQS-Z48lA")).build();
        // 企业微信-应用文本消息
        
        List<String> list1 = Arrays.asList("zhao_yling", "liuzhiyong");
        com.regent.rpush.dto.message.wechatwork.agent.TextMessageDTO wechatworkText = RpushMessage.WECHAT_WORK_AGENT_TEXT().content(content).receiverIds(list1).build();
        

        
        TextMessageDTO text = RpushMessage.WECHAT_OFFICIAL_ACCOUNT_TEXT().content(content).receiverIds(Collections.singletonList("oRtpyuKw6ZElNELuenaGQS-Z48lA")).build();
        // 邮箱
        EmailMessageDTO email = RpushMessage.EMAIL().title("会议通知").content(content).receiverIds(Collections.singletonList("liu_zyong@cvicse.com")).build();
        RpushService.instance("http://localhost:8124", "admin", "admin").sendMessage(email, wechatworkText, text);
    }

}
