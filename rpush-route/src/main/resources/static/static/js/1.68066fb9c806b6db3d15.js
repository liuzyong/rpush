webpackJsonp([1],{En30:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("Dd8w"),n=s.n(i),a=s("BO1k"),r=s.n(a),o=s("Xxa5"),c=s.n(o),l=s("exGp"),d=s.n(l),u=s("S+hO"),p=s("zL8q"),v={name:"groupManagement",components:{hisDetailDialog:function(){return s.e(15).then(s.bind(null,"6vVM"))}},data:function(){return{keyword:"",menuListActive:{},menuList:[],configs:[],groups:[],inputReceiverId:"",addReceiverIds:[],model:{configIds:[],groupIds:[],sendTos:[]},sendMessageParam:{platformParam:{},title:"",content:""},showHisDetailDialog:!1,requestNo:""}},mounted:function(){var e=this;return d()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.platformList();case 2:case"end":return t.stop()}},t,e)}))()},methods:{closeHisDetail:function(){this.showHisDetailDialog=!1},handleAddReceiverId:function(){var e=this;this.$nextTick(function(){e.$refs.inputReceiverId.focus()});var t=new RegExp(this.menuListActive.validateReg).test(this.inputReceiverId);t||p.Message.error("格式校验不正确"),!this.inputReceiverId||this.addReceiverIds.indexOf(this.inputReceiverId)>=0||!t||(this.addReceiverIds.push(this.inputReceiverId),this.inputReceiverId="")},handleClearAddReceiverId:function(){var e=this;this.$nextTick(function(){e.$refs.inputReceiverId.focus()}),this.addReceiverIds=[]},handleAddReceiverIdClose:function(e){var t=this;this.$nextTick(function(){t.$refs.inputReceiverId.focus()}),this.addReceiverIds.splice(this.addReceiverIds.indexOf(e),1)},routeTo:function(e){if(e){var t=!0,s=!1,i=void 0;try{for(var n,a=r()(this.menuList);!(t=(n=a.next()).done);t=!0){var o=n.value;o.id===e&&(this.menuListActive=o)}}catch(e){s=!0,i=e}finally{try{!t&&a.return&&a.return()}finally{if(s)throw i}}}else this.menuListActive=this.menuList[0];this.queryConfig(),this.queryGroup(),this.initParam()},platformList:function(){var e=this;return d()(c.a.mark(function t(){var s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.i)({keyword:e.keyword,pageNo:1,pageSize:999});case 2:0===(s=t.sent).code&&(e.menuList=s.data,e.routeTo(e.menuListActive.id||e.$route.query.platform));case 4:case"end":return t.stop()}},t,e)}))()},queryConfig:function(){var e=this;return d()(c.a.mark(function t(){var s,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.j)(e.menuListActive.id,{pageSize:2147483647});case 2:for(s=t.sent,e.configs=s.data.pagination.dataList,e.model.configIds=[],i=0;i<e.configs.length;i++)e.configs[i].defaultFlag&&e.model.configIds.push(e.configs[i].configId);case 6:case"end":return t.stop()}},t,e)}))()},queryGroup:function(){var e=this;return d()(c.a.mark(function t(){var s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.l)(e.menuListActive.id,{pageSize:2147483647});case 2:s=t.sent,e.model.groupIds=[],e.groups=s.data.dataList;case 5:case"end":return t.stop()}},t,e)}))()},sendMessage:function(){var e=this;return d()(c.a.mark(function t(){var s,i,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.model.configIds.length){t.next=3;break}return p.Message.error("请选择至少一个配置"),t.abrupt("return");case 3:return e.model.sendTos.push.apply(e.model.sendTos,e.addReceiverIds),e.sendMessageParam.platformParam[e.menuListActive.id]=n()({},e.model),t.next=7,Object(u.p)(e.sendMessageParam);case 7:s=t.sent,i=e,a=e.$createElement,e.$msgbox({title:"结果",message:a("p",null,[a("span",null,"消息投递成功，请求号："+s.data)]),showCancelButton:!0,confirmButtonText:"查看日志",cancelButtonText:"知道了",beforeClose:function(t,n,a){"confirm"===t&&(i.requestNo=s.data,e.showHisDetailDialog=!0),a()}}).then(function(e){});case 11:case"end":return t.stop()}},t,e)}))()},doShowHisDetailDialog:function(){this.requestNo="",this.showHisDetailDialog=!0},initParam:function(){this.sendMessageParam={platformParam:{},title:"",content:""},this.inputReceiverId="",this.addReceiverIds=[],this.model={configIds:[],groupIds:[],sendTos:[]}}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"taskManagement"},[s("div",{staticClass:"taskManagement_header"},[s("div",{staticClass:"title"},[s("el-row",[s("el-col",{attrs:{span:22}},[e._v("发消息")]),e._v(" "),s("el-col",{attrs:{span:2}},[s("el-button",{attrs:{type:"text"},on:{click:e.doShowHisDetailDialog}},[e._v("查看消息日志")])],1)],1)],1)]),e._v(" "),s("div",{staticClass:"taskManagement_container"},[s("div",{staticClass:"tm_c_wrap"},[s("div",{staticClass:"tm_c_menu"},[s("div",{staticClass:"tm_c_menu_option"},[e._m(0),e._v(" "),s("div",{staticClass:"tm_c_menu_search"},[s("el-input",{attrs:{size:"mini",placeholder:"请输入平台名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.platformList(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[s("el-button",{attrs:{slot:"append",size:"mini",icon:"el-icon-search"},on:{click:e.platformList},slot:"append"})],1)],1)]),e._v(" "),s("div",{staticClass:"tm_c_menu_list"},e._l(e.menuList,function(t,i){return s("div",{key:i,staticClass:"item",class:e.menuListActive.id===t.id?"itemActive":"",on:{click:function(s){return e.routeTo(t.id)}}},[s("div",[e._v(e._s(t.name))])])}),0)]),e._v(" "),s("div",{staticClass:"tm_c_table"},[s("div",{staticClass:"setOfLayer"},[s("div",{staticClass:"features"},[s("span",{staticClass:"title"},[e._v(e._s(e.menuListActive.name))])]),e._v(" "),s("div",{staticClass:"remarks_box"},[e._v("\n            "+e._s(e.menuListActive.description)+"\n          ")]),e._v(" "),s("div",{staticClass:"table_layout fixedLayer"},[s("div",{staticClass:"setOfLayer"},[s("el-row",[s("el-col",{attrs:{span:24}},[e._v("\n                  选择配置：\n                  "),s("el-select",{attrs:{multiple:"",placeholder:"请选择配置..."},model:{value:e.model.configIds,callback:function(t){e.$set(e.model,"configIds",t)},expression:"model.configIds"}},e._l(e.configs,function(e){return s("el-option",{key:e.configId,attrs:{label:e.configName,value:e.configId}})}),1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[e._v("\n                  选择分组：\n                  "),s("el-select",{attrs:{multiple:"",placeholder:"请选择分组..."},model:{value:e.model.groupIds,callback:function(t){e.$set(e.model,"groupIds",t)},expression:"model.groupIds"}},e._l(e.groups,function(e){return s("el-option",{key:e.id,attrs:{label:e.groupName,value:e.id}})}),1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:6}},[s("el-input",{ref:"inputReceiverId",attrs:{size:"small",clearable:"",placeholder:"输入并回车补充接收人..."},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleAddReceiverId(t)}},model:{value:e.inputReceiverId,callback:function(t){e.inputReceiverId=t},expression:"inputReceiverId"}})],1),e._v(" "),s("el-col",{attrs:{span:15}},[s("el-button",{attrs:{type:"text",size:"small"},on:{click:e.handleClearAddReceiverId}},[e._v("清空")])],1),e._v(" "),s("el-col",{attrs:{span:24}},e._l(e.addReceiverIds,function(t){return s("el-tag",{key:t,staticStyle:{"margin-bottom":"2px","margin-left":"2px"},attrs:{size:"small",closable:"",type:"info"},on:{close:function(s){return e.handleAddReceiverIdClose(t)}}},[e._v("\n                    "+e._s(t)+"\n                  ")])}),1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("el-input",{attrs:{size:"small",type:"text",clearable:"",placeholder:"输入消息标题..."},model:{value:e.sendMessageParam.title,callback:function(t){e.$set(e.sendMessageParam,"title",t)},expression:"sendMessageParam.title"}})],1)],1),e._v(" "),s("el-row",{staticStyle:{"border-bottom":"0"}},[s("el-col",{attrs:{span:24}},[s("el-input",{attrs:{type:"textarea",clearable:"",autosize:{minRows:15,maxRows:100},placeholder:"输入消息正文..."},model:{value:e.sendMessageParam.content,callback:function(t){e.$set(e.sendMessageParam,"content",t)},expression:"sendMessageParam.content"}})],1)],1),e._v(" "),s("el-row",{staticStyle:{"border-bottom":"0","border-top":"1px solid #c3c6cc",position:"sticky",bottom:"0",background:"white"}},[s("el-col",{attrs:{span:24}},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.sendMessage}},[e._v("发送")])],1)],1)],1)])])])])]),e._v(" "),s("hisDetailDialog",{attrs:{dialogVisible:e.showHisDetailDialog,requestNo:e.requestNo,platform:e.menuListActive.id},on:{closed:e.closeHisDetail}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tm_c_menu_top"},[t("div",{staticClass:"tm_c_menu_top_title"},[this._v("平台")])])}]};var f=s("VU/8")(v,m,!1,function(e){s("dptZ"),s("mG3E")},"data-v-5d8c9a36",null);t.default=f.exports},dptZ:function(e,t){},mG3E:function(e,t){}});
//# sourceMappingURL=1.68066fb9c806b6db3d15.js.map