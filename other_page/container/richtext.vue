<!-- 富文本组件 -->
<template>
	<view>
		<u-parse :html="richText" :selectable="true" :lazy-load="true" :show-with-animation="true"></u-parse>
	</view>
</template>

<script>
export default {
  data() {
    return {
      richText: ''
    }
  },
  onLoad(option) {
    // 适用于微信小程序及APP等需要容器的场景
    // 请注意请求api需用encodeURIComponent()进行编码，服务器返回字段需包含`richLabel`
    if (option.richLabel && option.api) {
      uni.showLoading({
        title: '加载中...'
      })
      this.$u.get(decodeURIComponent(option.api)).then(res => {
        uni.hideLoading()
        if (res.data) {
          this.richText = res.data[option.richLabel]
        }
      })
    }
  },
  methods: {
    navigate(e) {
      console.log(e)
      e.ignore()
      this.$dy_tool.openURL(e.href)
    }
  }
}
</script>

<style>

</style>
