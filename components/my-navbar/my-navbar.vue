<template>
	<view class="navbar" >
		<u-navbar :is-back="false" 
		height = "44"
		title-size="32"
		title-width="3000"
		title-color="#000000" 
		:title="mTitle" 
		border-bottom="true"
		:background="background">
			<view class="slot-wrap">
			<u-icon size="120" name="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/353dc221-41bc-42f8-9948-07133d142691.png"></u-icon>
			</view>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		props:{
			mTitle:{
				type:String,
				default:"祖码农口腔医院"
			}
		},
		data() {
			return {
				background: {
					// backgroundColor: '#f4f4f4',
					
					// 导航栏背景图
					// background: 'url(/static/images/首页图/顶部背景.png) ',
					// 还可以设置背景图size属性
					// backgroundSize: 'cover',
					
					// 渐变色
					// backgroundImage: 'linear-gradient(45deg, rgb(201, 210, 216), rgb(99, 182, 198))',
					
					backgroundImage: 'linear-gradient( 135deg, #3cccf7 10%, #4ba6cc 100%)',
					
				}
			}
		},
		methods:{
			getTitle(msg){
				this.mTitle = msg
			}
		}
		
	}
</script>


<style scoped lang="scss">
	.slot-wrap {
		display: flex;
		align-items: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		/* flex: 1; */
		/* 如果您想让slot内容与导航栏左右有空隙 */
		padding: 0 30rpx; 
	}
	.navbar {
		// margin-top: 10rpx !important;
	}
</style>