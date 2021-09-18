// 开发文档 https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html
import appConfig from '@/config/config.js'
// #ifdef H5
var jweixin = require('jweixin-module')
// #endif

export function isWxBrowser() {
	// #ifdef H5
	const ua = window.navigator.userAgent.toLowerCase()
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		const system = {
			win: false,
			mac: false
		}
		// 检测平台
		const p = window.navigator.platform
		system.win = p.indexOf('Win') === 0
		system.mac = p.indexOf('Mac') === 0
		if (system.win || system.mac) {
			console.log('在微信PC端上打开内置浏览器')
		} else {
			console.log('非微信PC端上打开内置浏览器')
		}
		return true
	} else {
		return false
	}
	// #endif
	return false
}

/**
 * 微信授权结束后返回原页面必须调用该方法
 * 可alert(history.lenth)可查看整个授权过程，得出返回逻辑
 */
export function fuckWx(back, moreBack) {
	// #ifdef H5
	const urlKey = 'wxOauthHisLength'
	const currentLenth = history.length
	if (back) {
		const oldLenth = sessionStorage.getItem(urlKey)
		sessionStorage.removeItem(urlKey)
		if (moreBack) {
			history.go(oldLenth - currentLenth - moreBack)
		} else {
			history.go(oldLenth - currentLenth)
		}
	} else {
		sessionStorage.setItem(urlKey, currentLenth)
	}
	// #endif
}

/**
 * 微信公众号登录, 推荐除底栏等自定义跳转地址，不需要填写redirect_uri
 * 可用history.lenth查看当前页授权过程
 */
// https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html
export function goWxOauthUrl(appid, scope, redirect_uri) {
	// #ifdef H5
	if (isWxBrowser()) {
		fuckWx()
		if (!redirect_uri) {
			redirect_uri = encodeURIComponent(document.location.href) // 微信浏览器本地调试请开启外网映射
		}
		const wxOauthUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' +
			redirect_uri +
			'&response_type=code&scope=' + scope + '&state=STATE#wechat_redirect'

		// 重新跳转到该页
		document.location.replace(wxOauthUrl)
	}
	// #endif
}

export default {
	isWxBrowser,
	goWxOauthUrl,
	fuckWx,
	initWxConfig(wxConfig) { // https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#1
		if (isWxBrowser()) {
			jweixin.config({
				debug: wxConfig.debug || false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: wxConfig.appId, // 必填，公众号的唯一标识
				timestamp: wxConfig.timestamp, // 必填，生成签名的时间戳
				nonceStr: wxConfig.nonceStr, // 必填，生成签名的随机串
				signature: wxConfig.signature, // 必填，签名
				jsApiList: wxConfig.jsApiList || [
					// 'checkJsApi', // 判断当前客户端版本是否支持指定JS接口
					'updateAppMessageShareData', // 分享给朋友，需放在ready中
					'updateTimelineShareData', // 分享到朋友圈，需放在ready中
					// 'getLocation', // 获取位置
					// 'openLocation', // 打开位置
					// 'scanQRCode', // 扫一扫接口
					'chooseWXPay' // 微信支付
					// 'hideAllNonBaseMenuItem', // 隐藏所有非基础按钮接口: https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#64
					// 'showAllNonBaseMenuItem', 
					// 'hideMenuItems', // 只能隐藏“传播类”和“保护类”按钮
					// 'showMenuItems'
				], // 必填，需要使用的JS接口列表
				openTagList: wxConfig.openTagList || [
					'wx-open-subscribe' // 服务号订阅通知 https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html#23
				] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
			})
		}
	},
	/**
	 * 微信分享
	 */
	updateAppMessageShareData(data, callback, destroyed) {
		if (isWxBrowser() && !destroyed) {
			jweixin.ready(function() { // 需在用户可能点击分享按钮前就先调用
				jweixin.updateAppMessageShareData({ // 分享给朋友： https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#10
					title: data.title, // 分享标题
					desc: data.desc, // 分享描述
					link: data.link || document.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: data.imgUrl, // 分享图标
					success: function() {
						callback()
					}
				})
				jweixin.updateTimelineShareData({ // 分享到朋友圈
					title: data.title, // 分享标题
					link: data.link || document.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: data.imgUrl, // 分享图标
					success: function() {}
				})
			})
		}
		// onHide：跳转下一页，onUnload：返回上一页。方法中必须传入destroyed销毁分享链接
		if (destroyed) {
			jweixin.updateAppMessageShareData({})
			jweixin.updateTimelineShareData({})
		}
	},
	/**
	 * 微信支付：
	 * 前端：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#58
	 * 后端：https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter1_1_1.shtml
	 */
	chooseWXPay(data, success, cancel, fail) {
		if (isWxBrowser()) {
			jweixin.chooseWXPay({
				timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
				nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
				package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
				signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
				paySign: data.paySign, // 支付签名
				success: function(res) {
					// 支付成功后的回调函数
					success(res)
				},
				// 支付取消回调函数
				cencel: function(res) {
					cancel(res)
				},
				// 支付失败回调函数
				fail: function(res) {
					fail(res)
				}
			})
		}
	},
	hideAllNonBaseMenuItem() { // 隐藏所有非基础按钮接口：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#47
		if (isWxBrowser()) {
			jweixin.ready(function() { // 需在用户可能点击分享按钮前就先调用
				jweixin.hideAllNonBaseMenuItem()
			})
		}
	},
	closeWindow() {
		if (isWxBrowser()) {
			jweixin.closeWindow()
		}
	}
}
