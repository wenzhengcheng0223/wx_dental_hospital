<!-- 小程序/APP的webview组件 -->
<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="url"></web-view>
	</view>
</template>

<script>
export default {
  data() {
    return {
      url: '',
      webviewStyles: {
        progress: {
          color: '#FF3333' // https://uniapp.dcloud.io/static/web-view.html
        }
      }
    }
  },
  onLoad(option) {
    const _this = this
    this.getOpenerEventChannel().on('acceptDataForWebview', function(data) {
      _this.url = data.data
    })
  },
  methods: {

  }
}
</script>

<style>

</style>
