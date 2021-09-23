<template>
	<view>
		<view class="navbar">
			<u-navbar :is-back="false" 
			height = "44"
			title-size="32"
			title-width="3000"
			title-color="#000000" 
			title="祖码农口腔医院" 
			border-bottom="true"
			:background="background">
				<view class="slot-wrap" @click="back()">
					<u-icon @click="back()" size="38" name="arrow-left" label="我的"></u-icon>
				</view>
			</u-navbar>
			<view class="warp">
					<u-tabs-swiper ref="uTabs" :list="list" 
					:current="current" 
					@change="tabsChange" 
					:is-scroll="false"
					bg-color="#eaeaea"
					gutter="70"/>
					<swiper  class="swiperbox" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
						<swiper-item class="swiper-item">
							<scroll-view scroll-y style="height: 100%;width: 100%;">
								<u-card 
								margin="20rpx 20rpx" padding="10" 
								v-for="(item,index) in order"
								v-if="total!=0"
								:key="index"
								:title="item.status" 
								title-color="#00bc16" 
								:sub-title="item.orderId" sub-title-color="#676767" style="font-weight: 600;">
									<view slot="body">
										<u-row>
											<u-col span="4">
												<u-image height="200" :src="item.img"
													mode="aspectFill" />
											</u-col>
											<u-col span="5" style="margin-top: 20rpx;">
												<text class="u-text-left">
													{{item.projectName}}
												</text>
											</u-col>
											<u-col span="3" >
												<view style="text-align: right;margin-right: 10rpx;">
													<text>
														￥{{item.price}}
													</text>
													<view>
														<text>
															x{{item.number}}
														</text>
													</view>
													
												</view>
												
											</u-col>
										</u-row>
									</view>
									<view slot="foot">
										<view class="u-text-right u-font-14" style="margin: 10rpx 0rpx;">
											<text style="margin-right: 20rpx;">共{{item.number}}件商品，合计{{item.price*item.number}}元</text>
											<view style="margin-top: 10rpx;">
												<u-button style="margin-right: 20rpx;" size="mini" shape="circle">
													联系客服
												</u-button>
												<u-button style="margin-right: 20rpx;" plain size="mini" shape="circle">
													取消订单
												</u-button>
												<u-button style="margin-right: 20rpx;" plain type="warning" size="mini" shape="circle">
													立即付款
												</u-button>
											</view>
										</view>
										<view>
											
										</view>
									</view>
								</u-card>
								<view v-else>
									<my-no-order></my-no-order>
								</view>
							</scroll-view>
						</swiper-item>
						<swiper-item class="swiper-item">
							<scroll-view scroll-y style="height: 100%;width: 100%;">
								<u-card 
								margin="20rpx 20rpx" padding="10" 
								v-for="(item,index) in order"
								v-if="paymentTotal!=0 && item.status=='待支付'"
								:key="index"
								:title="item.status" 
								title-color="#00bc16" 
								:sub-title="item.orderId" sub-title-color="#676767" style="font-weight: 600;">
									<view slot="body">
										<u-row>
											<u-col span="4">
												<u-image height="200" :src="item.img"
													mode="aspectFill" />
											</u-col>
											<u-col span="5" style="margin-top: 20rpx;">
												<text class="u-text-left">
													{{item.projectName}}
												</text>
											</u-col>
											<u-col span="3" >
												<view style="text-align: right;margin-right: 10rpx;">
													<text>
														￥{{item.price}}
													</text>
													<view>
														<text>
															x{{item.number}}
														</text>
													</view>
													
												</view>
												
											</u-col>
										</u-row>
									</view>
									<view slot="foot">
										<view class="u-text-right u-font-14" style="margin: 10rpx 0rpx;">
											<text style="margin-right: 20rpx;">共{{item.number}}件商品，合计{{item.price*item.number}}元</text>
											<view style="margin-top: 10rpx;">
												<u-button style="margin-right: 20rpx;" size="mini" shape="circle">
													联系客服
												</u-button>
												<u-button style="margin-right: 20rpx;" plain size="mini" shape="circle">
													取消订单
												</u-button>
												<u-button style="margin-right: 20rpx;" plain type="warning" size="mini" shape="circle">
													立即付款
												</u-button>
											</view>
										</view>
										<view>
											
										</view>
									</view>
								</u-card>
								<view v-else>
									<my-no-order></my-no-order>
								</view>
							</scroll-view>
						</swiper-item>
						<swiper-item class="swiper-item">
							<scroll-view scroll-y style="height: 100%;width: 100%;">
								<u-card 
								margin="20rpx 20rpx" padding="10" 
								v-for="(item,index) in order"
								v-if="paidTotal!=0 && item.status == '进行中'"
								:key="index"
								:title="item.status" 
								title-color="#00bc16" 
								:sub-title="item.orderId" sub-title-color="#676767" style="font-weight: 600;">
									<view slot="body">
										<u-row>
											<u-col span="4">
												<u-image height="200" :src="item.img"
													mode="aspectFill" />
											</u-col>
											<u-col span="5" style="margin-top: 20rpx;">
												<text class="u-text-left">
													{{item.projectName}}
												</text>
											</u-col>
											<u-col span="3" >
												<view style="text-align: right;margin-right: 10rpx;">
													<text>
														￥{{item.price}}
													</text>
													<view>
														<text>
															x{{item.number}}
														</text>
													</view>
													
												</view>
												
											</u-col>
										</u-row>
									</view>
									<view slot="foot">
										<view class="u-text-right u-font-14" style="margin: 10rpx 0rpx;">
											<text style="margin-right: 20rpx;">共{{item.number}}件商品，合计{{item.price*item.number}}元</text>
											<view style="margin-top: 10rpx;">
												<u-button style="margin-right: 20rpx;" size="mini" shape="circle">
													联系客服
												</u-button>
												<u-button style="margin-right: 20rpx;" plain size="mini" shape="circle">
													取消订单
												</u-button>
											</view>
										</view>
										<view>
											
										</view>
									</view>
								</u-card>
								<view v-else>
									<my-no-order></my-no-order>
								</view>
							</scroll-view>
						</swiper-item>
						<swiper-item class="swiper-item">
							<scroll-view scroll-y style="height: 100%;width: 100%;">
								<u-card 
								margin="20rpx 20rpx" padding="10" 
								v-for="(item,index) in order"
								v-if="doneTotal!=0 && item.status=='已完成'"
								:key="index"
								:title="item.status" 
								title-color="#00bc16" 
								:sub-title="item.orderId" sub-title-color="#676767" style="font-weight: 600;">
									<view slot="body">
										<u-row>
											<u-col span="4">
												<u-image height="200" :src="item.img"
													mode="aspectFill" />
											</u-col>
											<u-col span="5" style="margin-top: 20rpx;">
												<text class="u-text-left">
													{{item.projectName}}
												</text>
											</u-col>
											<u-col span="3" >
												<view style="text-align: right;margin-right: 10rpx;">
													<text>
														￥{{item.price}}
													</text>
													<view>
														<text>
															x{{item.number}}
														</text>
													</view>
													
												</view>
												
											</u-col>
										</u-row>
									</view>
									<view slot="foot">
										<view class="u-text-right u-font-14" style="margin: 10rpx 0rpx;">
											<text style="margin-right: 20rpx;">共{{item.number}}件商品，合计{{item.price*item.number}}元</text>
											<view style="margin-top: 10rpx;">
												<u-button style="margin-right: 20rpx;" size="mini" shape="circle">
													联系客服
												</u-button>
											</view>
										</view>
										<view>
											
										</view>
									</view>
								</u-card>
								<view v-else>
									<my-no-order></my-no-order>
								</view>
							</scroll-view>
						</swiper-item>
						<swiper-item class="swiper-item">
							<scroll-view scroll-y style="height: 100%;width: 100%;">
								<u-card 
								margin="20rpx 20rpx" padding="10" 
								v-for="(item,index) in order"
								v-if="cancelTotal!=0 && item.status=='已取消'"
								:key="index"
								:title="item.status" 
								title-color="#00bc16" 
								:sub-title="item.orderId" sub-title-color="#676767" style="font-weight: 600;">
									<view slot="body">
										<u-row>
											<u-col span="4">
												<u-image height="200" :src="item.img"
													mode="aspectFill" />
											</u-col>
											<u-col span="5" style="margin-top: 20rpx;">
												<text class="u-text-left">
													{{item.projectName}}
												</text>
											</u-col>
											<u-col span="3" >
												<view style="text-align: right;margin-right: 10rpx;">
													<text>
														￥{{item.price}}
													</text>
													<view>
														<text>
															x{{item.number}}
														</text>
													</view>
													
												</view>
												
											</u-col>
										</u-row>
									</view>
									<view slot="foot">
										<view class="u-text-right u-font-14" style="margin: 10rpx 0rpx;">
											<text style="margin-right: 20rpx;">共{{item.number}}件商品，合计{{item.price*item.number}}元</text>
											<view style="margin-top: 10rpx;">
												<u-button style="margin-right: 20rpx;" size="mini" shape="circle">
													联系客服
												</u-button>
											</view>
										</view>
										<view>
											
										</view>
									</view>
								</u-card>
								<view v-else>
									<my-no-order></my-no-order>
								</view>
							</scroll-view>
						</swiper-item>
					</swiper>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundImage: 'linear-gradient( 135deg, #3cccf7 10%, #4ba6cc 100%)',
				},
				list: [
					{
						name: '全部'
					}, 
					{
						name: '待支付'
					}, 
					{
						name: '进行中'
					}, 
					{
						name: '已完成'
					}, 
					{
						name: '已取消'
					}
				],
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				order:[{}],
				total:0,
				paymentTotal:0,
				paidTotal:0,
				doneTotal:0,
				cancelTotal:0
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
			},
			back(){
				this.$u.route({
					type:'back',
					url:'/pages/mine/mine'
				})
			}
		},
		onLoad() {
			uni.setStorage({
				key:'token',
				data:'tokentest'
			})
			this.$u.get('/wxapi/api/order', {
				}).then(res => {
					this.order = res.data.order
					this.total = res.data.order.length
					
			})
		}
	}
</script>

<style lang="scss">
	.slot-wrap {
		display: flex;
		align-items: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		/* flex: 1; */
		/* 如果您想让slot内容与导航栏左右有空隙 */
		padding: 0 30rpx; 
	}
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

</style>
