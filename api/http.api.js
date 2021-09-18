
// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分，
// 实际开发不加域名而是通过nginx转发),参数为(url, data = {}, header = {})
export const logoutUrl = '/weblogout'
export const validateDataUrl = '/captcha/sms'
export const loginUrl = '/login'
export const infoUrl = '/getInfo'

// 微信接口
export const wxLoginUrl = '/login/snsapi_base'
// export const wxLoginUrl = '/login/snsapi_userinfo'
export const wxJsTicketUrl = '/wx/public/support/jsapi'

export function loginApi(vm) {
  // 请求方法定义区域
  const fedLogOut = () => { // 前端登出
    vm.$u.vuex('vuex_token', '')
    vm.$u.vuex('vuex_user', { nickName: '游客' })
  }

  const logout = () => {
    fedLogOut()
    return vm.$u.get(logoutUrl)
  }

  const getValidateData = (params = {}) => {
    return vm.$u.get(validateDataUrl, params)
  }

  const login = (params = {}) => {
    return vm.$u.post(loginUrl, params)
  }

  const getInfo = (params = {}) => {
    // 需要登录才发起服务器请求
    if (!vm.vuex_token) { return Promise.reject() }
    return vm.$u.get(infoUrl)
  }

  // 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，
  // 也即this.$u.api)下
  return { fedLogOut, logout, getValidateData, login, getInfo }
}

export function wxApi(vm) {
  const wxLogin = (params = {}) => {
    return vm.$u.get(wxLoginUrl, params)
  }

  const getWxJsTicket = () => {
    // #ifdef H5
    return vm.$u.post(wxJsTicketUrl, {
      url: document.location.href
    })
    // #endif
    return Promise.reject()
  }
  return { wxLogin, getWxJsTicket }
}

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：https://uviewui.com/js/http.html
const install = (Vue, vm) => {
  vm.$u.api = { ...loginApi(vm), ...wxApi(vm) }
}

export default {
  install
}
