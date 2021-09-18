import appConfig from '@/config/config.js'

export function getBaseUrl() {
  if (process.env.NODE_ENV === 'development') {
    // #ifdef H5
    return appConfig.devApi
    // #endif
    // #ifndef H5
    return appConfig.devHost
    // #endif
  } else {
    return appConfig.prodHost + appConfig.prodApi
  }
}

// Vue.use说明参考：https://uviewui.com/components/vueUse.html
// 这里的vm，就是我们在vue文件里面的this，
// 所以我们能在这里获取vuex的变量，比如存放在里面的token
// 同时，我们也可以在此使用getApp().globalData，
// 如果你把token放在getApp().globalData的话，也是可以使用的
const install = (Vue, vm) => {
  // 此为自定义配置参数，具体参数见上方config说明
  Vue.prototype.$u.http.setConfig({
    baseUrl: getBaseUrl(),
    showLoading: process.env.NODE_ENV === 'development',
    originalData: true
  })
  // 请求拦截，配置Token等参数
  Vue.prototype.$u.http.interceptor.request = (config) => {
    if (vm.vuex_token) {
      config.header[appConfig.tokenHeadName] = appConfig.tokenTypeName + vm.vuex_token
    }
    return config
  }
  // 响应拦截，判断状态码是否通过
  Vue.prototype.$u.http.interceptor.response = (res) => {
    // 如果把originalData设置为了true，这里得到将会是服务器返回的所有的原始数据
    // 判断可能变成了res.statueCode，或者res.data.code之类的，请打印查看结果
    // 如果把originalData设置为了true，这里return回什么，
	// this.$u.post的then回调中就会得到什么
    if (res.statusCode === 200) {
      // 未设置状态码则默认成功状态
      const code = res.data.code || 200
      if (code === 401) {
        uni.showModal({
          title: '登录提示',
          content: '您还未登录或登录已过期,请重新登录',
          showCancel: false,
          success: function(res) {
            if (res.confirm) {
              uni.navigateTo({
                url: '/pages/login/login'
              })
            }
          }
        })
        return false
      } else if (code === 500) {
        // 自己知道就行了，别给用户看了
        if (process.env.NODE_ENV === 'development') {
          uni.showToast({
            title: '请求出错啦，请稍后再试',
            icon: 'none',
            duration: 800
          })
          console.log(res)
        }
        return false
      } else if (code !== 200 && code !== 1) {
        uni.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 800
        })
        return false
      } else {
        return res.data
      }
    } else {
      // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
      if (res.errMsg) {
        // 自己知道就行了，别给用户看了
        if (process.env.NODE_ENV === 'development') {
          uni.showToast({
            title: '服务器繁忙，请稍后再试',
            icon: 'none',
            duration: 800
          })
        }
      }
      return false
    }
  }
}

export default {
  install
}
