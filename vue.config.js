const appConfig = require('./config/config.js')

module.exports = {
  devServer: {
    // 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
    host: '0.0.0.0',
    port: process.env.port,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [appConfig.devApi]: {
        target: appConfig.devHost,
        changeOrigin: true,
        pathRewrite: {
          ['^' + appConfig.devApi]: ''
        }
      }
    },
    disableHostCheck: true
  }
}
