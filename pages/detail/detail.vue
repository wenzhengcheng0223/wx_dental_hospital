<template>
	<view style="background-color: #f4f4f4;">
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
					<u-icon @click="back()" size="38" name="arrow-left" label="详情页"></u-icon>
				</view>
			</u-navbar>
		</view>
		<view class="u-rela m-cell-top">
			<u-row>
				<u-col span="12">
					<u-image mode="aspectFill" height="200" width="200" :src="detail.img"></u-image>
					<view class="u-abso" style="top: 10rpx; left: 230rpx;">
						<view class="u-font-18">
							<text>{{detail.title}}</text>
						</view>
						<view class="u-line-2 u-font-14" style="margin-top: 10rpx;">
							{{detail.subTitle}}
						</view>
						<view style="margin-top: 10rpx;">
							<text style="color: #1989FA;font-size: 30rpx;">￥{{detail.price}}</text>
							<text style="text-decoration:line-through;
							font-size: 14px; 
							margin-left: 20rpx;">￥{{detail.originalPrice}}</text>
							<u-icon 
							style="margin-left: 30px;"
							name="shopping-cart-fill" 
							size="40" 
							color="#1989FA" 
							label="到店支付"></u-icon>
						</view>
					</view>

				</u-col>
			</u-row>
		</view>
		
			<u-form 
			:border-bottom="true"
			:model="form" 
			ref="uForm" 
			label-position="left">
				<view class="my-name">
						<u-form-item prop="name" :required="true" label="姓名:">
							<u-input placeholder="请输入姓名" v-model="form.name"></u-input>
						</u-form-item>
						<u-form-item prop="phone" :required="true" label="电话:">
							<u-input type="number" placeholder="请输入电话" v-model="form.phone"></u-input>
						</u-form-item>
				</view>			
				<view class="my-time">
					<u-form-item prop="number" :required="true" label="数量:">
						<u-number-box v-model="form.number" min="1" max="10"></u-number-box>
					</u-form-item>					
					<u-form-item prop="time" label-width="150" :required="true" label="预约时间:">
						<u-picker :params="params" mode="time" v-model="show" @confirm="confirm"></u-picker>
						<u-input v-model="form.time" @click="show = true" :value="form.time" placeholder="请选择预约时间"  type="select" ></u-input>
					</u-form-item>

				</view>

				<view class="my-name">
						<u-form-item label="留言" label-position="top">
							<u-input placeholder="请输入留言内容" v-model="form.remark" type="textarea" autoHeight="true"></u-input>
						</u-form-item>
				</view>
			</u-form>
			<view class="m-foot">
				<u-row>
					<u-col span="3">
						<view class="u-margin-20">
						<text style="color: #1989FA;font-size: 30rpx;">￥{{detail.price}}</text>
							
						</view>
					</u-col>
					<u-col span="9">
						<u-button type="primary" shape="circle" @click="submit">提交订单</u-button>
					</u-col>
				</u-row>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rules:{
					time:[{
						required: true,
						message: '请选择正确的时间',
						trigger: ['change', 'blur'],
					}],
					name: [{
							required: true,
							min: 2,
							max: 4,
							message: '请输入姓名',
							trigger: ['change', 'blur'],
						}, {
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// this.$u.test.mobile()就是返回true或者false的
								return this.$u.test.chinese(value);
							},
							message: '请输入正确的姓名',
							// 触发器可以同时用blur和change
							trigger: ['change', 'blur'],
						}
					
					],
					phone: [{
						required: true,
						len: 11,
						type: 'number',
						message: '请输入手机号',
						trigger: ['change', 'blur'],
					}, {
						// 自定义验证函数，见上说明
						validator: (rule, value, callback) => {
							// 上面有说，返回true表示校验通过，返回false表示不通过
							// this.$u.test.mobile()就是返回true或者false的
							return this.$u.test.mobile(value);
						},
						message: '手机号码不正确',
						// 触发器可以同时用blur和change
						trigger: ['change', 'blur'],
					
					}]
				},
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: false,
					second: false,
					timestamp:false
				},
				show: false,
				form:{
					time:'',
					number:'1',
					name:'',
					phone:'',
					remark:''
				},
				detail:{
					id:'',
					img:'',
					title:'',
					subTitle:'',
					price:'',
					originalPrice:''
				},
				background: {
					backgroundImage: 'linear-gradient( 135deg, #3cccf7 10%, #4ba6cc 100%)',
				}

			}
		},
		methods:{
			valChange(e){
				this.form.number = e.value
			},
			confirm(e){
				this.form.time = e.year+'-'+e.month+'-'+e.day+' '+e.hour+':'+'00'
				console.log(this.form.time)
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
						console.log(this.form)
					} else {
						console.log('验证失败');
					}
				});
			},
			back() {
				this.$u.route({
					type: 'back',
					url:'/pages/appointment/appointment'
				});
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad(options) {
			console.log(options)
			this.detail = options
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
	.m-cell-top{
		padding: 10rpx 0rpx;
		margin-right: 10rpx;
		margin-left: 10rpx;
		margin-top: 10rpx;
		background-color: #fefefe;
		// border: 2px solid #d1d1d1;
		box-shadow: 0rpx 5rpx 10rpx 0rpx #9e9ea6;
	}
	.my-time{
		padding: 0rpx 20rpx;
		margin-right: 10rpx;
		margin-left: 10rpx;
		margin-top: 20rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 5rpx 10rpx 0rpx #9e9ea6;
	}
	.my-name{
		padding: 0rpx 20rpx; 
		margin-right: 10rpx;
		margin-left: 10rpx;
		margin-top: 20rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 5rpx 10rpx 0rpx #9e9ea6;
	}
	.m-foot{
		padding: 20rpx 0rpx; 
		background-color: #ffffff;
		box-shadow: 0rpx 5rpx 10rpx 0rpx #9e9ea6;
		margin-top: 220rpx;
		margin-right: 10rpx;
		margin-left: 10rpx;
	}
</style>