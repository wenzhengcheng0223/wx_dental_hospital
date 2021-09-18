<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },
	onPageNotFound: function() {
    console.log('App Page Not Found')
  },
	onError (err) {
		console.log(err) // 捕获 app error
	}
}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
</style>
