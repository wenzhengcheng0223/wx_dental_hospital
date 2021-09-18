<template>
	<view style="background-color: #fefefe;">
		<my-navbar></my-navbar>
		<view>
			<view class="u-text-center m-avatar">
				<u-avatar :src="avatar" size="150"></u-avatar>
				<view class="u-text-center u-font-18">
					<text>文正成</text>
				</view>
			</view>
			
			<view class="m-cell" style="margin-top: 40rpx;">
				<u-cell-group>
						<u-cell-item title="所有订单"></u-cell-item>
							<u-grid :col="3">
									<u-grid-item>
										<u-icon :size="60" name="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/2efb8ae3-d232-42dd-aa8f-346ed67deec5.png" ></u-icon>
										<view class="grid-text">进行中</view>
									</u-grid-item>
									<u-grid-item>
										<u-icon :size="60" name="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/684cf2a8-cad5-4f7c-8984-b9fc22a70329.png" ></u-icon>
										<view class="grid-text">已完成</view>
									</u-grid-item>
									<u-grid-item>
										<u-icon :size="60" name="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/ee4b9087-71ee-4ae8-8ba0-c7865f046824.png"></u-icon>
										<view class="grid-text">已取消</view>
									</u-grid-item>
							</u-grid>
				</u-cell-group>
			</view>
			<view class="m-cell">
				<u-cell-group>
						<u-cell-item title="最新消息"></u-cell-item>
						<u-cell-item title="我的订阅"></u-cell-item>
						<u-cell-item title="我的表单"></u-cell-item>
				</u-cell-group>
			</view>
			<view class="m-cell">
				<u-cell-group>
						<u-cell-item title="xx省xxx市xxx区(县)xxx号"></u-cell-item>
						<u-cell-item title="19999999999"></u-cell-item>
						<u-cell-item title="周一至周五 09:00—18:00"></u-cell-item>
						<u-cell-item title="这是祖码农口腔医院的预约类模板"></u-cell-item>
				</u-cell-group>
			</view>
		</view>	
		<!-- <view style="margin-top: 20rpx ;"></view> -->
		<my-tabbar></my-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/f0c28e01-7aa3-4141-b4f5-865648b89fa0.png'
			}
		},
		methods: {
			
		}
	}
</script>

<style>

	.m-cell{
		margin-top: 20rpx;
		margin-left: 40rpx;
		margin-right: 40rpx;
		background-color: #159FDE;
		/* border: 2px solid #000000; */
		box-shadow:0rpx 0rpx 10rpx #a6a6a6;
	}
	.m-avatar{
		height: 200rpx;
		padding: 20rpx 0rpx;
		/* background-color: #159FDE; */
	}
</style>
