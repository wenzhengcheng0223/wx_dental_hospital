(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["other_page/login/login"],{100:
/*!*********************************************************************************************!*\
  !*** E:/Desktop/projects/uview-uni-cli/other_page/login/login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var o=t(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */101),r=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=r.a},101:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Desktop/projects/uview-uni-cli/other_page/login/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){var e=this;return{title:"Hello",hidePage:!1,model:{phone:"",uuid:"",code:"",password:"",rePassword:""},formReady:!1,activeStyle:{color:"#f3f4f6",marginTop:"20rpx",backgroundColor:"#E4352B"},inactiveStyle:{color:"#f3f4f6",marginTop:"20rpx",backgroundColor:"#FFA9A4"},rules:{phone:[{required:!0,message:"请输入手机号",trigger:["blur"]},{validator:function(n,t,o){return e.$u.test.mobile(t)},message:"手机号码不正确",trigger:["blur"]}],code:[{required:!0,message:"请输入验证码",trigger:["change"]},{type:"number",message:"验证码只能为数字",trigger:["change"]}],password:[{required:!0,message:"请输入密码",trigger:["change","blur"]},{pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,message:"需同时含有字母和数字，长度在6-12之间",trigger:["change","blur"]}],rePassword:[{required:!0,message:"请重新输入密码",trigger:["change","blur"]},{validator:function(n,t,o){return t===e.model.password},message:"两次输入的密码不相等",trigger:["change","blur"]}]},codeTips:"",errorType:["message"],labelPosition:"left",border:!1,check:!0}},onLoad:function(e){this.$u.api.fedLogOut(),this.wxAutoLogin(e)},onReady:function(){this.$refs.uForm.setRules(this.rules)},watch:{model:{handler:function(e,n){var t=this;""!=e.phone&&""!=e.code?this.$refs.uForm.validate((function(e){t.formReady=!!e})):t.formReady=!1},deep:!0}},methods:{wxAutoLogin:function(e){},login:function(){this.$u.vuex("vuex_token","123456"),this.$u.vuex("vuex_user",{nickName:"uView用户"}),e.navigateBack()},codeChange:function(e){this.codeTips=e},getCode:function(){var n=this;this.$u.test.mobile(this.model.phone)?this.$refs.uCode.canGetCode?(e.showLoading({title:"正在获取验证码",mask:!0}),setTimeout((function(){e.hideLoading(),n.$u.toast("验证码已发送"),n.$refs.uCode.start()}),500)):this.$u.toast("请稍后再试"):this.$u.toast("请输入正确手机号")}}};n.default=t}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},102:
/*!******************************************************************************************************************************!*\
  !*** E:/Desktop/projects/uview-uni-cli/other_page/login/login.vue?vue&type=style&index=0&id=4db295c0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var o=t(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&id=4db295c0&lang=scss&scoped=true& */103),r=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=r.a},103:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Desktop/projects/uview-uni-cli/other_page/login/login.vue?vue&type=style&index=0&id=4db295c0&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){},96:
/*!***************************************************************************************!*\
  !*** E:/Desktop/projects/uview-uni-cli/main.js?{"page":"other_page%2Flogin%2Flogin"} ***!
  \***************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";(function(e){t(/*! uni-pages */4),t(/*! @dcloudio/uni-stat */5);o(t(/*! vue */2));var n=o(t(/*! ./other_page/login/login.vue */97));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},97:
/*!********************************************************************!*\
  !*** E:/Desktop/projects/uview-uni-cli/other_page/login/login.vue ***!
  \********************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var o=t(/*! ./login.vue?vue&type=template&id=4db295c0&scoped=true& */98),r=t(/*! ./login.vue?vue&type=script&lang=js& */100);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t(/*! ./login.vue?vue&type=style&index=0&id=4db295c0&lang=scss&scoped=true& */102);var i,a=t(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */14),c=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"4db295c0",null,!1,o["components"],i);c.options.__file="other_page/login/login.vue",n["default"]=c.exports},98:
/*!***************************************************************************************************************!*\
  !*** E:/Desktop/projects/uview-uni-cli/other_page/login/login.vue?vue&type=template&id=4db295c0&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,n,t){"use strict";t.r(n);var o=t(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=4db295c0&scoped=true& */99);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},99:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Desktop/projects/uview-uni-cli/other_page/login/login.vue?vue&type=template&id=4db295c0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return u})),t.d(n,"components",(function(){return o}));try{o={uForm:function(){return t.e(/*! import() | uview-ui/components/u-form/u-form */"uview-ui/components/u-form/u-form").then(t.bind(null,/*! @/uview-ui/components/u-form/u-form.vue */192))},uFormItem:function(){return Promise.all(/*! import() | uview-ui/components/u-form-item/u-form-item */[t.e("common/vendor"),t.e("uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null,/*! @/uview-ui/components/u-form-item/u-form-item.vue */199))},uInput:function(){return Promise.all(/*! import() | uview-ui/components/u-input/u-input */[t.e("common/vendor"),t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null,/*! @/uview-ui/components/u-input/u-input.vue */210))},uButton:function(){return t.e(/*! import() | uview-ui/components/u-button/u-button */"uview-ui/components/u-button/u-button").then(t.bind(null,/*! @/uview-ui/components/u-button/u-button.vue */152))},uVerificationCode:function(){return t.e(/*! import() | uview-ui/components/u-verification-code/u-verification-code */"uview-ui/components/u-verification-code/u-verification-code").then(t.bind(null,/*! @/uview-ui/components/u-verification-code/u-verification-code.vue */255))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},u=!1,i=[];r._withStripped=!0}},[[96,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/other_page/login/login.js.map