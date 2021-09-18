// 强制登录，onLoad时当前页面出栈，不返回当前页，适用于而页面全部功能需要登录的场景
export function forceLogin(vuex_token) {
	if (!vuex_token) {
		uni.redirectTo({
			url: '/pages/login/login'
		})
	}
	return !vuex_token
}

// 校验登录，调用方法时当前页面不出栈，返回当前页，适用于页面部分功能需要登录的场景
export function toLogin(vuex_token) {
	if (!vuex_token) {
		uni.navigateTo({
			url: '/pages/login/login'
		})
	}
	return !vuex_token
}

export function getCurrentRoute() {
	const routes = getCurrentPages() // 获取当前打开过的页面路由数组
	const curRoute = routes[routes.length - 1].route // 获取当前页面路由
	const curParam = routes[routes.length - 1].options // 获取路由参数
	// 拼接参数
	let param = ''
	for (const key in curParam) {
		param += '&' + key + '=' + curParam[key]
	}
	return "/" + curRoute + param.replace('&', '?')
}

export function openURL(url) {
	// 非http请求直接跳转本地页面
	if (!/^https?/.test(url)) {
		uni.navigateTo({
			url: url
		})
		return
	}
	// #ifdef APP-PLUS || MP
	// Http请求用webview打开
	uni.navigateTo({
		url: '/pages/container/webview',
		success: function(res) {
			// 第一步：通过eventChannel向被打开页面传送数据
			res.eventChannel.emit('acceptDataForWebview', {
				data: url
			})
		}
	})
	return
	// #endif
	// #ifdef APP-PLUS
	plus.runtime.openURL(url)
	// #endif
	// #ifdef H5
	window.open(url)
	// #endif
	// #ifdef MP
	uni.setClipboardData({
		data: url
	})
	uni.showModal({
		content: '已自动复制网址，请在手机浏览器里粘贴该网址',
		showCancel: false
	})
	// #endif
}

export function formatNumToKw(num) {
	// 数值简化，千转k，万转w
	return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(2) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(2) + 'w' : num
}

export function getSuffix(filename) {
	// 获取文件后缀
	const pos = filename.lastIndexOf('.')
	let suffix = ''
	if (pos !== -1) {
		suffix = filename.substring(pos)
	}
	return suffix
}

export function contactKefu(phoneNum) {
	// 联系电话
	uni.makePhoneCall({
		phoneNumber: phoneNum || '17688889999' //仅为示例
	});
}

export default {
	forceLogin,
	toLogin,
	getCurrentRoute,
	openURL,
	formatNumToKw,
	getSuffix,
	contactKefu
}
