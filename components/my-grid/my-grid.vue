<template>
	
	<view class="content">
		<u-grid 
		:col="4" 
		:border="true"
		>
			<u-grid-item class="u-rela" bg-color="#f4f4f4" :custom-style="customStyle" v-for="(item,index) in gridItem" :key="index">
				<u-icon class="" style="padding-left: 0rpx;" :name="item.iconUrl" :size="90"></u-icon>
				<view class="grid-text">{{item.text}}</view>
			</u-grid-item>
		</u-grid>	
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				customStyle:{
					padding: '8rpx 0rpx'
				},
				gridItem:[
					{
						text:'3D种植牙',
						iconUrl:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/4804138c-ba35-4001-8d3e-addca147cfb3.png'
					},
					{
						text:'牙齿',
						iconUrl:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/4804138c-ba35-4001-8d3e-addca147cfb3.png'
					},
					{
						text:'3D种植牙',
						iconUrl:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/4804138c-ba35-4001-8d3e-addca147cfb3.png'
					},
					{
						text:'3D种植牙',
						iconUrl:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/4804138c-ba35-4001-8d3e-addca147cfb3.png'
					}
				],
				
			};
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
	};
</script>

<style scoped lang="scss">
	.content{
		margin-top: 10px;

	}
	.grid-text {
		font-size: 28rpx;
		margin-top: 20rpx;
		color: $u-type-info;
	}
</style>
