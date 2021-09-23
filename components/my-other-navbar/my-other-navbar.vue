<template>
	<view class="navbar" >
		<u-navbar :is-back="true" 
		back-icon-color="#060606"
		back-text="返回"
		:back-text-style="backStyle"
		height = "44"
		title-size="32"
		title-width="3000"
		title-color="#060606" 
		title="祖码农口腔医院" 
		border-bottom="true"
		:background="background">
		</u-navbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundImage: 'linear-gradient( 135deg, #3cccf7 10%, #4ba6cc 100%)',
				}
			}
		},
		methods:{
			back() {
				this.$u.route({
					type: 'back'
				});
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
</style>