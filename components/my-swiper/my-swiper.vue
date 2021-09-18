<template>
	<view class="wrap">
		<u-swiper :list="list" 
		:effect3d="true"
		title="true" 
		height="300" 
		border-radius="0"></u-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/b34ab308-7b9b-4ea5-abbf-fe8a1168eb71.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/6f202eee-2936-4223-8053-48af6e3614f3.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/7202276c-b626-4e53-a397-f992f929798f.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					},
					{
						image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/1397a7c2-a05b-4af3-9182-a85d1182929f.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 0rpx;
	}
</style>