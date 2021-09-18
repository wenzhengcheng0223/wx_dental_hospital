<template>
	<view>
		<my-navbar></my-navbar>
		<view class="warp">
				<u-tabs-swiper ref="uTabs" :list="list" 
				:current="current" 
				@change="tabsChange" 
				:is-scroll="false"
				bg-color="#c8c8c8"
				gutter="80"/>
				<swiper  class="swiperbox" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
					<swiper-item class="swiper-item">
						<scroll-view scroll-y style="height: 100%;width: 100%;">
							<u-card 
							v-for="(item,index) in allProject"
							:key="index"
							margin="10rpx 20rpx 30rpx 20rpx" 
							:body-style="bodyStyle" 
							:foot-style="footStyle"
							:head-style="headStyle">
								<view slot="head">
									<u-image height="300" :src="item.img"
										mode="aspectFill" />
								</view>
								<view slot="body" class="card-foot">
									<view class="all-card-title">{{item.title}}</view>
									<view class="u-flex u-line-2 all-card-sub-title">{{item.subTitle}}</view>
								</view>
								<view slot="foot" class="card-foot">
									<view class="card-foot u-padding-0">
										<u-row gutter="" class="u-rela u-flex u-flex-nowrap">
											<u-col span="24">
												<view class=" u-flex u-flex-nowrap u-padding-0">
													<view style="font-size: 28rpx;color: #1989FA;">
														<text>￥{{item.money}}</text>
													</view>
													<view style="text-decoration:line-through;margin-left: 10rpx;">
														<p>￥{{item.originalPrice}}</p>
													</view>
													<view style="margin-left: 20rpx;">
														<p>已预约:{{item.reserved}}</p>
													</view>
													<view style="margin-left: 20rpx;">
														<p>剩余:{{item.balance}}</p>
													</view>
												</view>
												<view class="u-abso" style="right: 2%;top: -8rpx;">
													<u-button style="" shape="circle" size="mini" type="primary">主要按钮</u-button>
												</view>
											</u-col>
										</u-row>
									</view>
								</view>
							</u-card>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<scroll-view scroll-y style="height: 100%;width: 100%;">
							<u-card 
							v-for="(item,index) in allProject"
							:key="index"
							margin="10rpx 20rpx 30rpx 20rpx" 
							:body-style="bodyStyle" 
							:foot-style="footStyle"
							:head-style="headStyle">
								<view slot="head">
									<u-image height="300" :src="item.img"
										mode="aspectFill" />
								</view>
								<view slot="body" class="card-foot">
									<view class="all-card-title">{{item.title}}</view>
									<view class="u-flex u-line-2 all-card-sub-title">{{item.subTitle}}</view>
								</view>
								<view slot="foot" class="card-foot">
									<view class="card-foot u-padding-0">
										<u-row gutter="" class="u-rela u-flex u-flex-nowrap">
											<u-col span="24">
												<view class=" u-flex u-flex-nowrap u-padding-0">
													<view style="font-size: 28rpx;color: #1989FA;">
														<text>￥{{item.money}}</text>
													</view>
													<view style="text-decoration:line-through;margin-left: 10rpx;">
														<p>￥{{item.originalPrice}}</p>
													</view>
													<view style="margin-left: 20rpx;">
														<p>已预约:{{item.reserved}}</p>
													</view>
													<view style="margin-left: 20rpx;">
														<p>剩余:{{item.balance}}</p>
													</view>
												</view>
												<view class="u-abso" style="right: 2%;top: -8rpx;">
													<u-button style="" shape="circle" size="mini" type="primary">主要按钮</u-button>
												</view>
											</u-col>
										</u-row>
									</view>
								</view>
							</u-card>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<scroll-view scroll-y style="height: 100%;width: 100%;">
							<u-card 
							v-for="(item,index) in allProject"
							:key="index"
							margin="10rpx 20rpx 30rpx 20rpx" 
							:body-style="bodyStyle" 
							:foot-style="footStyle"
							:head-style="headStyle">
								<view slot="head">
									<u-image height="300" :src="item.img"
										mode="aspectFill" />
								</view>
								<view slot="body" class="card-foot">
									<view class="all-card-title">{{item.title}}</view>
									<view class="u-flex u-line-2 all-card-sub-title">{{item.subTitle}}</view>
								</view>
								<view slot="foot" class="card-foot">
									<view class="card-foot u-padding-0">
										<u-row gutter="" class="u-rela u-flex u-flex-nowrap">
											<u-col span="24">
												<view class=" u-flex u-flex-nowrap u-padding-0">
													<view style="font-size: 28rpx;color: #1989FA;">
														<text>￥{{item.money}}</text>
													</view>
													<view style="text-decoration:line-through;margin-left: 10rpx;">
														<p>￥{{item.originalPrice}}</p>
													</view>
													<view style="margin-left: 20rpx;">
														<p>已预约:{{item.reserved}}</p>
													</view>
													<view style="margin-left: 20rpx;">
														<p>剩余:{{item.balance}}</p>
													</view>
												</view>
												<view class="u-abso" style="right: 2%;top: -8rpx;">
													<u-button style="" shape="circle" size="mini" type="primary">主要按钮</u-button>
												</view>
											</u-col>
										</u-row>
									</view>
								</view>
							</u-card>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<scroll-view scroll-y style="height: 100%;width: 100%;">
							<u-card 
							v-for="(item,index) in allProject"
							:key="index"
							margin="10rpx 20rpx 30rpx 20rpx" 
							:body-style="bodyStyle" 
							:foot-style="footStyle"
							:head-style="headStyle">
								<view slot="head">
									<u-image height="300" :src="item.img"
										mode="aspectFill" />
								</view>
								<view slot="body" class="card-foot">
									<view class="all-card-title">{{item.title}}</view>
									<view class="u-flex u-line-2 all-card-sub-title">{{item.subTitle}}</view>
								</view>
								<view slot="foot" class="card-foot">
									<view class="card-foot u-padding-0">
										<u-row gutter="" class="u-rela u-flex u-flex-nowrap">
											<u-col span="24">
												<view class=" u-flex u-flex-nowrap u-padding-0">
													<view style="font-size: 28rpx;color: #1989FA;">
														<text>￥{{item.money}}</text>
													</view>
													<view style="text-decoration:line-through;margin-left: 10rpx;">
														<p>￥{{item.originalPrice}}</p>
													</view>
													<view style="margin-left: 20rpx;">
														<p>已预约:{{item.reserved}}</p>
													</view>
													<view style="margin-left: 20rpx;">
														<p>剩余:{{item.balance}}</p>
													</view>
												</view>
												<view class="u-abso" style="right: 2%;top: -8rpx;">
													<u-button style="" shape="circle" size="mini" type="primary">主要按钮</u-button>
												</view>
											</u-col>
										</u-row>
									</view>
								</view>
							</u-card>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		<my-tabbar></my-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headStyle:{
					backgroundColor: '#ffffff',
					color:'#000000',
					padding:'10rpx 0rpx'
				},
				bodyStyle:{
					backgroundColor: '#f0f0f0',
					color:'#000000',
					padding:'10rpx 20rpx'
				},
				footStyle:{
					backgroundColor: '#f0f0f0',
					color:'#232323',
					fontSize:'25rpx',
					padding:'15rpx'
				},
				list: [{
					name: '全部'
				}, {
					name: '牙齿种植'
				}, {
					name: '牙齿纠正'
				}, {
					name: '其他'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				allProject:[
					{
						img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/c82192f4-56b7-4af1-876c-e17aa3c92ae0.jpg',
						title:'3D超薄瓷贴面',
						subTitle:'3M陶瓷托槽，一般预计正畸疗程1-2年左右，主要看病人畸形程度',
						money:'5000.00',
						originalPrice:'10000',
						reserved:'15',
						balance:'85'
					},{
						img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/e8290670-2867-4215-a28a-bd586e6bf880.jpg',
						title:'美学牙齿纠正治疗',
						subTitle:'3M陶瓷托槽，一般预计正畸疗程1-2年左右，主要看病人畸形程度',
						money:'3000.00',
						originalPrice:'8000',
						reserved:'5',
						balance:'95'
					},{
						img:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/d3b8c4b6-1962-41c8-b685-a8085a6d4399.jpg',
						title:'现代化种植牙技术',
						subTitle:'3M陶瓷托槽，一般预计正畸疗程1-2年左右，主要看病人畸形程度',
						money:'8000.00',
						originalPrice:'14000',
						reserved:'1',
						balance:'100'
					}
				]
			}
		},
		methods: {
            tabsChange(index) {
                this.swiperCurrent = index;
            },
            // swiper-item左右移动，通知tabs的滑块跟随移动
            transition(e) {
                let dx = e.detail.dx;
                this.$refs.uTabs.setDx(dx);
            },
            // 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
            // swiper滑动结束，分别设置tabs和swiper的状态
            animationfinish(e) {
                let current = e.detail.current;
                this.$refs.uTabs.setFinishCurrent(current);
                this.swiperCurrent = current;
                this.current = current;
            }
		}
	}
</script>

<style lang="scss" scoped>
	.swiperbox{
		height: 625px;
		
	}
	.warp{

		width: 100%;
	}
	.swiper-item{
		height: 100%;
		background-color: #f4f4f4;
	}
	
	// 全部页面卡片字体
	.all-card-title{
		font-size: 30rpx;
		
	}
	.all-card-sub-title{
		
		margin-top: 15rpx;
		font-size: 26rpx;
	}
	.all-card-foot{
		
	}

	.card-foot{
		padding: 0rpx 0rpx;
	}
</style>
