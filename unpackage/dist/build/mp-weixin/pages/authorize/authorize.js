(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/authorize/authorize"],{"17a9":function(n,e,o){"use strict";o.r(e);var t=o("8964"),u=o("5597");for(var i in u)"default"!==i&&function(n){o.d(e,n,(function(){return u[n]}))}(i);var c,r=o("f0c5"),s=Object(r["a"])(u["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],c);e["default"]=s.exports},5597:function(n,e,o){"use strict";o.r(e);var t=o("79a2"),u=o.n(t);for(var i in t)"default"!==i&&function(n){o.d(e,n,(function(){return t[n]}))}(i);e["default"]=u.a},"79a2":function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{openId:"",nickName:null,avatarUrl:null,userInfo:{},code:"",canIGetUserProfile:!1}},onLoad:function(){var e=this;n.login({provider:"weixin",success:function(n){"login:ok"==n.errMsg?(e.canIGetUserProfile=!0,e.code=n.code,console.log("临时账号code获取成功:"+e.code)):console.log("授权失败")}})},onShow:function(){},methods:{toIndex:function(){var n=this;setTimeout((function(){console.log("test"),n.$u.route({url:"/pages/index/index",type:"tab"})}),1e3)},getUserInfo:function(n){var e=this,o=n.detail.errMsg;console.log(n),"getUserInfo:ok"==o?(console.log("开始获取"),e.getUserProfile()):console.log("获取失败")},getUserProfile:function(){var e=this;n.getUserProfile&&n.getUserProfile({desc:"test",provider:"weixin",success:function(o){console.log(e.userInfo),n.showLoading({mask:!0,title:"正在获取授权信息"}),e.userInfo=o.userInfo,e.login()},fail:function(){console.log("拒绝")}})},login:function(){var e=this;n.request({url:"https://api.weixin.qq.com/sns/jscode2session",method:"GET",data:{appid:"wx82bd6bd1e5c7e77c",secret:"736f47efb255fbae65be8b2ac541b0fd",js_code:e.code,grant_type:"authorization_code"},success:function(o){var t=o.errMsg;"request:ok"==t&&(n.showToast({title:"授权成功",mask:!0,icon:"success"}),console.log("授权中"),e.toIndex())},fail:function(e){console.log(e),n.showToast({icon:"error",title:"请联系管理员",mask:!0})}})},back:function(){this.$u.route({url:"/pages/login/login",type:"navigateBack",delta:1})}}};e.default=o}).call(this,o("543d")["default"])},8964:function(n,e,o){"use strict";o.d(e,"b",(function(){return u})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return t}));var t={myNavbar:function(){return o.e("components/my-navbar/my-navbar").then(o.bind(null,"2ef8"))},uRow:function(){return o.e("uview-ui/components/u-row/u-row").then(o.bind(null,"f3ce"))},uCol:function(){return o.e("uview-ui/components/u-col/u-col").then(o.bind(null,"002f"))},uIcon:function(){return o.e("uview-ui/components/u-icon/u-icon").then(o.bind(null,"8ac5"))},uLine:function(){return o.e("uview-ui/components/u-line/u-line").then(o.bind(null,"a179"))},uButton:function(){return o.e("uview-ui/components/u-button/u-button").then(o.bind(null,"5ffd"))}},u=function(){var n=this,e=n.$createElement;n._self._c},i=[]},c021:function(n,e,o){"use strict";(function(n){o("4120"),o("921b");t(o("66fd"));var e=t(o("17a9"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,o("543d")["createPage"])}},[["c021","common/runtime","common/vendor"]]]);