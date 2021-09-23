import Vue from 'vue'
import App from './App'
import store from '@/store'
import uView from 'uview-ui' // 引入全局uView
const vuexStore = require('@/store/$u.mixin.js') // 引入uView提供的对vuex的简写法文件

Vue.use(uView)
Vue.mixin(vuexStore)


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用，参考：http://www.uviewui.com/js/http.html
import requestConfig from '@/utils/request.config.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(requestConfig, app)


app.$mount()
