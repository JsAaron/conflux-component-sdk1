(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsB-noticeBar-noticeBar"],{"0681":function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a9e3");var n={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};t.default=n},"1adc":function(i,t,e){"use strict";var n=e("a150"),o=e.n(n);o.a},2378:function(i,t,e){"use strict";e.r(t);var n=e("e9e3"),o=e("5648");for(var c in o)["default"].indexOf(c)<0&&function(i){e.d(t,i,(function(){return o[i]}))}(c);e("1adc");var u=e("f0c5"),a=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"660fbe02",null,!1,n["a"],void 0);t["default"]=a.exports},2482:function(i,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return n}));var n={uNoticeBar:e("b35e").default},o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"u-page"},[e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("基础功能")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("u-notice-bar",{attrs:{text:i.text1}})],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("可关闭")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("u-notice-bar",{attrs:{text:i.text5,mode:"closable"}})],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("自定义横向滚动速度")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("u-notice-bar",{attrs:{text:i.text2,speed:"250",mode:"closable"}})],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("可跳转(点击右箭头)")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("u-notice-bar",{attrs:{text:i.text3,mode:"link",url:"/pages/componentsB/tag/tag"}})],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("横向步进滚动")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("u-notice-bar",{attrs:{text:i.text4,step:!0},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.click.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("纵向滚动")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("u-notice-bar",{attrs:{text:i.text4,direction:"column"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.click.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("自定义样式")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("u-notice-bar",{attrs:{text:i.text1,color:"#ffffff",bgColor:"#f56c6c"}})],1)],1)],1)},c=[]},"2a4e":function(i,t,e){"use strict";e.r(t);var n=e("f7ff"),o=e.n(n);for(var c in n)["default"].indexOf(c)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(c);t["default"]=o.a},3130:function(i,t,e){"use strict";e.r(t);var n=e("5340"),o=e("d759");for(var c in o)["default"].indexOf(c)<0&&function(i){e.d(t,i,(function(){return o[i]}))}(c);e("3fad");var u=e("f0c5"),a=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"59765974",null,!1,n["a"],void 0);t["default"]=a.exports},"3fad":function(i,t,e){"use strict";var n=e("e77a"),o=e.n(n);o.a},4038:function(i,t,e){"use strict";var n=e("c85c"),o=e.n(n);o.a},5340:function(i,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){}));var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"u-icon",class:["u-icon--"+i.labelPos],on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.clickHandler.apply(void 0,arguments)}}},[i.isImg?e("v-uni-image",{staticClass:"u-icon__img",style:[i.imgStyle,i.$u.addStyle(i.customStyle)],attrs:{src:i.name,mode:i.imgMode}}):e("v-uni-text",{staticClass:"u-icon__icon",class:i.uClasses,style:[i.iconStyle,i.$u.addStyle(i.customStyle)],attrs:{"hover-class":i.hoverClass}},[i._v(i._s(i.icon))]),""!==i.label?e("v-uni-text",{staticClass:"u-icon__label",style:{color:i.labelColor,fontSize:i.$u.addUnit(i.labelSize),marginLeft:"right"==i.labelPos?i.$u.addUnit(i.space):0,marginTop:"bottom"==i.labelPos?i.$u.addUnit(i.space):0,marginRight:"left"==i.labelPos?i.$u.addUnit(i.space):0,marginBottom:"top"==i.labelPos?i.$u.addUnit(i.space):0}},[i._v(i._s(i.label))]):i._e()],1)},o=[]},5648:function(i,t,e){"use strict";e.r(t);var n=e("b818"),o=e.n(n);for(var c in n)["default"].indexOf(c)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(c);t["default"]=o.a},5920:function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"uicon-level":"","uicon-column-line":"","uicon-checkbox-mark":"","uicon-folder":"","uicon-movie":"","uicon-star-fill":"","uicon-star":"","uicon-phone-fill":"","uicon-phone":"","uicon-apple-fill":"","uicon-chrome-circle-fill":"","uicon-backspace":"","uicon-attach":"","uicon-cut":"","uicon-empty-car":"","uicon-empty-coupon":"","uicon-empty-address":"","uicon-empty-favor":"","uicon-empty-permission":"","uicon-empty-news":"","uicon-empty-search":"","uicon-github-circle-fill":"","uicon-rmb":"","uicon-person-delete-fill":"","uicon-reload":"","uicon-order":"","uicon-server-man":"","uicon-search":"","uicon-fingerprint":"","uicon-more-dot-fill":"","uicon-scan":"","uicon-share-square":"","uicon-map":"","uicon-map-fill":"","uicon-tags":"","uicon-tags-fill":"","uicon-bookmark-fill":"","uicon-bookmark":"","uicon-eye":"","uicon-eye-fill":"","uicon-mic":"","uicon-mic-off":"","uicon-calendar":"","uicon-calendar-fill":"","uicon-trash":"","uicon-trash-fill":"","uicon-play-left":"","uicon-play-right":"","uicon-minus":"","uicon-plus":"","uicon-info":"","uicon-info-circle":"","uicon-info-circle-fill":"","uicon-question":"","uicon-error":"","uicon-close":"","uicon-checkmark":"","uicon-android-circle-fill":"","uicon-android-fill":"","uicon-ie":"","uicon-IE-circle-fill":"","uicon-google":"","uicon-google-circle-fill":"","uicon-setting-fill":"","uicon-setting":"","uicon-minus-square-fill":"","uicon-plus-square-fill":"","uicon-heart":"","uicon-heart-fill":"","uicon-camera":"","uicon-camera-fill":"","uicon-more-circle":"","uicon-more-circle-fill":"","uicon-chat":"","uicon-chat-fill":"","uicon-bag-fill":"","uicon-bag":"","uicon-error-circle-fill":"","uicon-error-circle":"","uicon-close-circle":"","uicon-close-circle-fill":"","uicon-checkmark-circle":"","uicon-checkmark-circle-fill":"","uicon-question-circle-fill":"","uicon-question-circle":"","uicon-share":"","uicon-share-fill":"","uicon-shopping-cart":"","uicon-shopping-cart-fill":"","uicon-bell":"","uicon-bell-fill":"","uicon-list":"","uicon-list-dot":"","uicon-zhihu":"","uicon-zhihu-circle-fill":"","uicon-zhifubao":"","uicon-zhifubao-circle-fill":"","uicon-weixin-circle-fill":"","uicon-weixin-fill":"","uicon-twitter-circle-fill":"","uicon-twitter":"","uicon-taobao-circle-fill":"","uicon-taobao":"","uicon-weibo-circle-fill":"","uicon-weibo":"","uicon-qq-fill":"","uicon-qq-circle-fill":"","uicon-moments-circel-fill":"","uicon-moments":"","uicon-qzone":"","uicon-qzone-circle-fill":"","uicon-baidu-circle-fill":"","uicon-baidu":"","uicon-facebook-circle-fill":"","uicon-facebook":"","uicon-car":"","uicon-car-fill":"","uicon-warning-fill":"","uicon-warning":"","uicon-clock-fill":"","uicon-clock":"","uicon-edit-pen":"","uicon-edit-pen-fill":"","uicon-email":"","uicon-email-fill":"","uicon-minus-circle":"","uicon-minus-circle-fill":"","uicon-plus-circle":"","uicon-plus-circle-fill":"","uicon-file-text":"","uicon-file-text-fill":"","uicon-pushpin":"","uicon-pushpin-fill":"","uicon-grid":"","uicon-grid-fill":"","uicon-play-circle":"","uicon-play-circle-fill":"","uicon-pause-circle-fill":"","uicon-pause":"","uicon-pause-circle":"","uicon-eye-off":"","uicon-eye-off-outline":"","uicon-gift-fill":"","uicon-gift":"","uicon-rmb-circle-fill":"","uicon-rmb-circle":"","uicon-kefu-ermai":"","uicon-server-fill":"","uicon-coupon-fill":"","uicon-coupon":"","uicon-integral":"","uicon-integral-fill":"","uicon-home-fill":"","uicon-home":"","uicon-hourglass-half-fill":"","uicon-hourglass":"","uicon-account":"","uicon-plus-people-fill":"","uicon-minus-people-fill":"","uicon-account-fill":"","uicon-thumb-down-fill":"","uicon-thumb-down":"","uicon-thumb-up":"","uicon-thumb-up-fill":"","uicon-lock-fill":"","uicon-lock-open":"","uicon-lock-opened-fill":"","uicon-lock":"","uicon-red-packet-fill":"","uicon-photo-fill":"","uicon-photo":"","uicon-volume-off-fill":"","uicon-volume-off":"","uicon-volume-fill":"","uicon-volume":"","uicon-red-packet":"","uicon-download":"","uicon-arrow-up-fill":"","uicon-arrow-down-fill":"","uicon-play-left-fill":"","uicon-play-right-fill":"","uicon-rewind-left-fill":"","uicon-rewind-right-fill":"","uicon-arrow-downward":"","uicon-arrow-leftward":"","uicon-arrow-rightward":"","uicon-arrow-upward":"","uicon-arrow-down":"","uicon-arrow-right":"","uicon-arrow-left":"","uicon-arrow-up":"","uicon-skip-back-left":"","uicon-skip-forward-right":"","uicon-rewind-right":"","uicon-rewind-left":"","uicon-arrow-right-double":"","uicon-arrow-left-double":"","uicon-wifi-off":"","uicon-wifi":"","uicon-empty-data":"","uicon-empty-history":"","uicon-empty-list":"","uicon-empty-page":"","uicon-empty-order":"","uicon-man":"","uicon-woman":"","uicon-man-add":"","uicon-man-add-fill":"","uicon-man-delete":"","uicon-man-delete-fill":"","uicon-zh":"","uicon-en":""}},6137:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-view[data-v-485c3904], uni-scroll-view[data-v-485c3904], uni-swiper-item[data-v-485c3904]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notice[data-v-485c3904]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.u-notice__left-icon[data-v-485c3904]{align-items:center;margin-right:5px}.u-notice__right-icon[data-v-485c3904]{margin-left:5px;align-items:center}.u-notice__swiper[data-v-485c3904]{height:16px;display:flex;flex-direction:row;align-items:center;flex:1}.u-notice__swiper__item[data-v-485c3904]{display:flex;flex-direction:row;align-items:center;overflow:hidden}.u-notice__swiper__item__text[data-v-485c3904]{font-size:14px;color:#f9ae3d}',""]),i.exports=t},7099:function(i,t,e){var n=e("bfcb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=e("4f06").default;o("483c429f",n,!0,{sourceMap:!1,shadowMode:!1})},7755:function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a9e3");var n={props:{text:{type:[Array],default:uni.$u.props.columnNotice.text},icon:{type:String,default:uni.$u.props.columnNotice.icon},mode:{type:String,default:uni.$u.props.columnNotice.mode},color:{type:String,default:uni.$u.props.columnNotice.color},bgColor:{type:String,default:uni.$u.props.columnNotice.bgColor},fontSize:{type:[String,Number],default:uni.$u.props.columnNotice.fontSize},speed:{type:[String,Number],default:uni.$u.props.columnNotice.speed},step:{type:Boolean,default:uni.$u.props.columnNotice.step},duration:{type:[String,Number],default:uni.$u.props.columnNotice.duration},disableTouch:{type:Boolean,default:uni.$u.props.columnNotice.disableTouch}}};t.default=n},"7977a":function(i,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return n}));var n={uColumnNotice:e("d64e").default,uRowNotice:e("2378").default},o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return i.show?e("v-uni-view",{staticClass:"u-notice-bar",style:[{backgroundColor:i.bgColor},i.$u.addStyle(i.customStyle)]},["column"===i.direction||"row"===i.direction&&i.step?[e("u-column-notice",{attrs:{color:i.color,bgColor:i.bgColor,text:i.text,mode:i.mode,step:i.step,icon:i.icon,"disable-touch":i.disableTouch,fontSize:i.fontSize,duration:i.duration},on:{close:function(t){arguments[0]=t=i.$handleEvent(t),i.close.apply(void 0,arguments)},click:function(t){arguments[0]=t=i.$handleEvent(t),i.click.apply(void 0,arguments)}}})]:[e("u-row-notice",{attrs:{color:i.color,bgColor:i.bgColor,text:i.text,mode:i.mode,fontSize:i.fontSize,speed:i.speed,url:i.url,linkType:i.linkType,icon:i.icon},on:{close:function(t){arguments[0]=t=i.$handleEvent(t),i.close.apply(void 0,arguments)},click:function(t){arguments[0]=t=i.$handleEvent(t),i.click.apply(void 0,arguments)}}})]],2):i._e()},c=[]},"7fd2":function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a9e3");var n={props:{text:{type:[Array,String],default:uni.$u.props.noticeBar.text},direction:{type:String,default:uni.$u.props.noticeBar.direction},step:{type:Boolean,default:uni.$u.props.noticeBar.step},icon:{type:String,default:uni.$u.props.noticeBar.icon},mode:{type:String,default:uni.$u.props.noticeBar.mode},color:{type:String,default:uni.$u.props.noticeBar.color},bgColor:{type:String,default:uni.$u.props.noticeBar.bgColor},speed:{type:[String,Number],default:uni.$u.props.noticeBar.speed},fontSize:{type:[String,Number],default:uni.$u.props.noticeBar.fontSize},duration:{type:[String,Number],default:uni.$u.props.noticeBar.duration},disableTouch:{type:Boolean,default:uni.$u.props.noticeBar.disableTouch},url:{type:String,default:uni.$u.props.noticeBar.url},linkType:{type:String,default:uni.$u.props.noticeBar.linkType}}};t.default=n},"8e654":function(i,t,e){"use strict";e.r(t);var n=e("9e00"),o=e.n(n);for(var c in n)["default"].indexOf(c)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(c);t["default"]=o.a},"9e00":function(i,t,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(e("7fd2")),c={name:"u-notice-bar",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{show:!0}},methods:{click:function(i){this.$emit("click",i),this.url&&this.linkType&&this.openPage()},close:function(){this.show=!1,this.$emit("close")}}};t.default=c},a150:function(i,t,e){var n=e("babd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=e("4f06").default;o("606e5b70",n,!0,{sourceMap:!1,shadowMode:!1})},a4aa:function(i,t,e){"use strict";e.r(t);var n=e("ff37"),o=e.n(n);for(var c in n)["default"].indexOf(c)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(c);t["default"]=o.a},b35e:function(i,t,e){"use strict";e.r(t);var n=e("7977a"),o=e("8e654");for(var c in o)["default"].indexOf(c)<0&&function(i){e.d(t,i,(function(){return o[i]}))}(c);e("4038");var u=e("f0c5"),a=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"47c738b8",null,!1,n["a"],void 0);t["default"]=a.exports},b818:function(i,t,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(e("c7eb")),c=n(e("1da1"));e("ac1f"),e("00b4"),e("14d9"),e("fb6a");var u=n(e("fe76f")),a={name:"u-row-notice",mixins:[uni.$u.mpMixin,uni.$u.mixin,u.default],data:function(){return{animationDuration:"0",animationPlayState:"paused",nvueInit:!0,show:!0}},watch:{text:{immediate:!0,handler:function(i,t){this.vue(),uni.$u.test.string(i)||uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")}},fontSize:function(){this.vue()},speed:function(){this.vue()}},computed:{textStyle:function(){var i={};return i.color=this.color,i.fontSize=uni.$u.addUnit(this.fontSize),i},animationStyle:function(){var i={};return i.animationDuration=this.animationDuration,i.animationPlayState=this.animationPlayState,i},innerText:function(){for(var i=[],t=this.text.split(""),e=0;e<t.length;e+=20)i.push(t.slice(e,e+20).join(""));return i}},mounted:function(){this.init()},methods:{init:function(){this.vue(),uni.$u.test.string(this.text)||uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")},vue:function(){var i=this;return(0,c.default)((0,o.default)().mark((function t(){var e;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return 0,e=0,t.next=3,uni.$u.sleep();case 3:return t.next=5,i.$uGetRect(".u-notice__content__text");case 5:return e=t.sent.width,t.next=8,i.$uGetRect(".u-notice__content");case 8:t.sent.width,i.animationDuration="".concat(e/uni.$u.getPx(i.speed),"s"),i.animationPlayState="paused",setTimeout((function(){i.animationPlayState="running"}),10);case 12:case"end":return t.stop()}}),t)})))()},nvue:function(){return(0,c.default)((0,o.default)().mark((function i(){return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:case"end":return i.stop()}}),i)})))()},loopAnimation:function(i,t){},getNvueRect:function(i){},clickHandler:function(i){this.$emit("click")},close:function(){this.$emit("close")}}};t.default=a},babd:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-view[data-v-660fbe02], uni-scroll-view[data-v-660fbe02], uni-swiper-item[data-v-660fbe02]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notice[data-v-660fbe02]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.u-notice__left-icon[data-v-660fbe02]{align-items:center;margin-right:5px}.u-notice__right-icon[data-v-660fbe02]{margin-left:5px;align-items:center}.u-notice__content[data-v-660fbe02]{text-align:right;flex:1;display:flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden}.u-notice__content__text[data-v-660fbe02]{font-size:14px;color:#f9ae3d;padding-left:100%;word-break:keep-all;white-space:nowrap;-webkit-animation:u-loop-animation-data-v-660fbe02 10s linear infinite both;animation:u-loop-animation-data-v-660fbe02 10s linear infinite both;display:flex;flex-direction:row}@-webkit-keyframes u-loop-animation-data-v-660fbe02{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes u-loop-animation-data-v-660fbe02{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}',""]),i.exports=t},bd3b:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-view[data-v-59765974], uni-scroll-view[data-v-59765974], uni-swiper-item[data-v-59765974]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}@font-face{font-family:uicon-iconfont;src:url(https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf) format("truetype")}.u-icon[data-v-59765974]{display:flex;align-items:center}.u-icon--left[data-v-59765974]{flex-direction:row-reverse;align-items:center}.u-icon--right[data-v-59765974]{flex-direction:row;align-items:center}.u-icon--top[data-v-59765974]{flex-direction:column-reverse;justify-content:center}.u-icon--bottom[data-v-59765974]{flex-direction:column;justify-content:center}.u-icon__icon[data-v-59765974]{font-family:uicon-iconfont;position:relative;display:flex;flex-direction:row;align-items:center}.u-icon__icon--primary[data-v-59765974]{color:#3c9cff}.u-icon__icon--success[data-v-59765974]{color:#5ac725}.u-icon__icon--error[data-v-59765974]{color:#f56c6c}.u-icon__icon--warning[data-v-59765974]{color:#f9ae3d}.u-icon__icon--info[data-v-59765974]{color:#909399}.u-icon__img[data-v-59765974]{height:auto;will-change:transform}.u-icon__label[data-v-59765974]{line-height:1}',""]),i.exports=t},bfcb:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-demo-block__content[data-v-44a62dc1]{display:flex;flex-direction:column}',""]),i.exports=t},c85c:function(i,t,e){var n=e("ce88");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=e("4f06").default;o("38dcda98",n,!0,{sourceMap:!1,shadowMode:!1})},ce88:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-view[data-v-47c738b8], uni-scroll-view[data-v-47c738b8], uni-swiper-item[data-v-47c738b8]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notice-bar[data-v-47c738b8]{overflow:hidden;padding:9px 12px;flex:1}',""]),i.exports=t},cf0e6:function(i,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return n}));var n={uIcon:e("3130").default},o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"u-notice",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.clickHandler.apply(void 0,arguments)}}},[i._t("icon",[i.icon?e("v-uni-view",{staticClass:"u-notice__left-icon"},[e("u-icon",{attrs:{name:i.icon,color:i.color,size:"19"}})],1):i._e()]),e("v-uni-swiper",{staticClass:"u-notice__swiper",attrs:{"disable-touch":i.disableTouch,vertical:!i.step,circular:!0,interval:i.duration,autoplay:!0},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.noticeChange.apply(void 0,arguments)}}},i._l(i.text,(function(t,n){return e("v-uni-swiper-item",{key:n,staticClass:"u-notice__swiper__item"},[e("v-uni-text",{staticClass:"u-notice__swiper__item__text u-line-1",style:[i.textStyle]},[i._v(i._s(t))])],1)})),1),["link","closable"].includes(i.mode)?e("v-uni-view",{staticClass:"u-notice__right-icon"},["link"===i.mode?e("u-icon",{attrs:{name:"arrow-right",size:17,color:i.color}}):i._e(),"closable"===i.mode?e("u-icon",{attrs:{name:"close",size:16,color:i.color},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.close.apply(void 0,arguments)}}}):i._e()],1):i._e()],2)},c=[]},d64e:function(i,t,e){"use strict";e.r(t);var n=e("cf0e6"),o=e("a4aa");for(var c in o)["default"].indexOf(c)<0&&function(i){e.d(t,i,(function(){return o[i]}))}(c);e("f4ec");var u=e("f0c5"),a=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"485c3904",null,!1,n["a"],void 0);t["default"]=a.exports},d759:function(i,t,e){"use strict";e.r(t);var n=e("f7f9"),o=e.n(n);for(var c in n)["default"].indexOf(c)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(c);t["default"]=o.a},d8ae:function(i,t,e){"use strict";e.r(t);var n=e("2482"),o=e("2a4e");for(var c in o)["default"].indexOf(c)<0&&function(i){e.d(t,i,(function(){return o[i]}))}(c);e("f688");var u=e("f0c5"),a=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"44a62dc1",null,!1,n["a"],void 0);t["default"]=a.exports},e77a:function(i,t,e){var n=e("bd3b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=e("4f06").default;o("744203ab",n,!0,{sourceMap:!1,shadowMode:!1})},e8f3:function(i,t,e){var n=e("6137");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=e("4f06").default;o("182376bf",n,!0,{sourceMap:!1,shadowMode:!1})},e9e3:function(i,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return n}));var n={uIcon:e("3130").default},o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"u-notice",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.clickHandler.apply(void 0,arguments)}}},[i._t("icon",[i.icon?e("v-uni-view",{staticClass:"u-notice__left-icon"},[e("u-icon",{attrs:{name:i.icon,color:i.color,size:"19"}})],1):i._e()]),e("v-uni-view",{ref:"u-notice__content",staticClass:"u-notice__content"},[e("v-uni-view",{ref:"u-notice__content__text",staticClass:"u-notice__content__text",style:[i.animationStyle]},i._l(i.innerText,(function(t,n){return e("v-uni-text",{key:n,style:[i.textStyle]},[i._v(i._s(t))])})),1)],1),["link","closable"].includes(i.mode)?e("v-uni-view",{staticClass:"u-notice__right-icon"},["link"===i.mode?e("u-icon",{attrs:{name:"arrow-right",size:17,color:i.color}}):i._e(),"closable"===i.mode?e("u-icon",{attrs:{name:"close",size:16,color:i.color},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.close.apply(void 0,arguments)}}}):i._e()],1):i._e()],2)},c=[]},f4ec:function(i,t,e){"use strict";var n=e("e8f3"),o=e.n(n);o.a},f688:function(i,t,e){"use strict";var n=e("7099"),o=e.n(n);o.a},f7f9:function(i,t,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("14d9"),e("caad"),e("2532"),e("c975");var o=n(e("5920")),c=n(e("0681")),u={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,c.default],computed:{uClasses:function(){var i=[];return i.push(this.customPrefix+"-"+this.name),this.color&&uni.$u.config.type.includes(this.color)&&i.push("u-icon__icon--"+this.color),i},iconStyle:function(){var i={};return i={fontSize:uni.$u.addUnit(this.size),lineHeight:uni.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:uni.$u.addUnit(this.top)},this.color&&!uni.$u.config.type.includes(this.color)&&(i.color=this.color),i},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var i={};return i.width=this.width?uni.$u.addUnit(this.width):uni.$u.addUnit(this.size),i.height=this.height?uni.$u.addUnit(this.height):uni.$u.addUnit(this.size),i},icon:function(){return o.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(i){this.$emit("click",this.index),this.stop&&this.preventEvent(i)}}};t.default=u},f7ff:function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{text1:"uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用",text2:"uView UI众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨",text3:"uView UI收集众多的常用页面和布局，减少开发者的重复工作，让您专注逻辑，事半功倍",text4:["寒雨连江夜入吴","平明送客楚山孤","洛阳亲友如相问","一片冰心在玉壶"],text5:"涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川"}},onLoad:function(){},methods:{click:function(i){console.log(i)}}};t.default=n},fe76f:function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a9e3");var n={props:{text:{type:String,default:uni.$u.props.rowNotice.text},icon:{type:String,default:uni.$u.props.rowNotice.icon},mode:{type:String,default:uni.$u.props.rowNotice.mode},color:{type:String,default:uni.$u.props.rowNotice.color},bgColor:{type:String,default:uni.$u.props.rowNotice.bgColor},fontSize:{type:[String,Number],default:uni.$u.props.rowNotice.fontSize},speed:{type:[String,Number],default:uni.$u.props.rowNotice.speed}}};t.default=n},ff37:function(i,t,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("ac1f"),e("00b4");var o=n(e("7755")),c={mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],watch:{text:{immediate:!0,handler:function(i,t){uni.$u.test.array(i)||uni.$u.error("noticebar组件direction为column时，要求text参数为数组形式")}}},computed:{textStyle:function(){var i={};return i.color=this.color,i.fontSize=uni.$u.addUnit(this.fontSize),i},vertical:function(){return"horizontal"!=this.mode}},data:function(){return{index:0}},methods:{noticeChange:function(i){this.index=i.detail.current},clickHandler:function(){this.$emit("click",this.index)},close:function(){this.$emit("close")}}};t.default=c}}]);