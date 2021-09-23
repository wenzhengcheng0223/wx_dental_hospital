<template>
	<view>
		<!-- 头部区域 -->
		<my-navbar></my-navbar>
		<!-- 中间区域 -->
		<view class="content">
			<view>
				<view class="u-rela">
					<u-image mode="scaleToFill" width="780" height="400"
						src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/56c6e303-fa15-4fd8-bba1-be5f5f704b46.jpg"></u-image>
					<view class="u-abso u-main-color u-text-center m-title">
						Physician Team
					</view>
					<view class="u-abso u-text-center m-font">
						医 师 团 队
					</view>
				</view>
			</view>
			<view class="card-view">
				<u-row>
					<u-col span="4" v-for="(item,index) in physicianTeam" :key="index">
						<u-card margin="30rpx 10rpx" :body-style="bodyStyle" :head-style="headStyle">
							<view slot="head">
								<u-image height="300" width="234" :src="item.image"
									mode="aspectFill" />
							</view>
							<view slot="body">
								<view class="card-title">
									{{item.name}}
								</view>
								<view class="card-sub-title">{{item.title}}</view>
							</view>
						</u-card>
					</u-col>
				</u-row>
			</view>
			<!-- 提表预约 -->
			<view class="u-rela">
				<view class="m-register">
					<text>Register</text>
				</view>
				<view class="u-abso m-register-font">
					<text>提表预约</text>
				</view>
			</view>

			<view class="m-form">
				<u-form :model="form" ref="uForm">
					<u-form-item label="姓 名:" prop="name">
						<u-input :border="true" v-model="form.name"></u-input>
					</u-form-item>
					<u-form-item label="电 话:" prop="phone">
						<u-input type="number" :border="true" v-model="form.phone"></u-input>
					</u-form-item>
					<u-form-item label="患者类型:" prop="type" label-width="140">
						<u-radio-group @change="radioChangeValue" v-model="form.type">
							<u-radio v-for="(item,index) in radioValue" :key="index" :name="item.name"
								:disabled="item.disabled" shape="circle">{{item.name}}</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="预约项目:" prop="project" label-width="140">
						<u-checkbox-group @change="checkboxValue">
							<u-checkbox size="24" label-size="20" v-model="item.checked" 
							v-for="(item, index) in checkboxList"
								:key="index" :name="item.name">
								{{ item.name }}
							</u-checkbox>
						</u-checkbox-group>
					</u-form-item>
					<u-button shape="square" :ripple="true" type="primary" @click="submit">
						立即预约
					</u-button>
				</u-form>
			</view>
		</view>
		<!-- 底部区域 -->
		<my-tabbar></my-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				physicianTeam:[
					{
						name:'文医师',
						image:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/de6c2420-4e40-43a3-8b9f-3c411f33f101.jpg',
						title:'口腔治疗专科医师'
					},
					{
						name:'刘医师',
						image:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/971b1271-35f2-4e64-bd30-f9d3f76956cb.jpg',
						title:'口腔全科医师'
					},
					{
						name:'朱护士',
						image:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/3ab5bbfa-e9dd-48e8-be1f-7e5cbe9d29fa.jpg',
						title:'口腔执业护士'
					}
				],
				form: {
					name: '',
					phone: '',
					type: '',
					project: '',
					date: ''
				},
				radioValue: [{
						name: '初诊患者',
						disabled: false
					},
					{
						name: '复诊患者',
						disabled: false
					}
				],
				checkboxList: [{
						name: '3D种植牙',
						checked: false,
						disabled: false
					},
					{
						name: '根管治疗',
						checked: false,
						disabled: false
					},
					{
						name: '牙齿修复',
						checked: false,
						disabled: false
					},
					{
						name: '清洁牙齿',
						checked: false,
						disabled: false
					}
				],
				headStyle: {
					padding: '0rpx'
				},
				bodyStyle: {
					padding: '4rpx 0rpx 8rpx 12rpx',
					marginTop: '10rpx',
					marginBottom: '10rpx'
				},
				rules: {
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

					}],
					type: [{
						required: true,
						message: '请选择正确的患者类型',
						trigger: ['change', 'blur'],
					}],
					project: [{
						required: true,
						type:'array',
						message: '请选择需要预约的项目',
						trigger: ['change', 'blur'],
					}]
				}
			}
		},
		methods: {
			checkboxValue(e) {
				this.form.project = e;
				console.log(this.form.project)
			},
			radioChangeValue(e) {
				this.form.type = e;
				console.log(this.form.type)
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log("验证通过");
					} else {
						console.log("验证不通过")
					}

				});

			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style>
	.content {
		background-color: #fafafa;
	}

	.card-view {
		background-color: #fafafa;
		border-bottom: 5px solid #fdfdfd;
	}

	/* 医师团队 */
	.m-title {
		bottom: 30%;
		width: 780rpx;
		color: #1b5793;
		font-weight: 700;
		font-size: 52rpx;
	}

	.m-font {
		bottom: 0%;
		background-color: #2f303260;
		width: 780rpx;
		height: 60rpx;
		padding-top: 15rpx;
		font-size: 32rpx;
		font-weight: 300;
		color: #fefefe;
	}

	/* card区域文字 */
	.card-title {
		font-weight: 400;
	}

	.card-sub-title {
		font-size: 24rpx;
		color: #868686;
	}

	/* 提表预约 */
	.m-register {
		margin-top: 5rpx;
		width: 780rpx;
		height: 100rpx;
		background-color: #f4f4f4;
		font-size: 50rpx;
		font-weight: 400;
		color: #159fde;
		text-align: center;
	}

	.m-register-font {
		width: 780rpx;
		height: 45rpx;
		background-color: #33333370;
		color: #FEFEFE;
		text-align: center;
		bottom: 3%;
	}

	.m-register-font text {
		position: absolute;
		bottom: 2%;
		left: 43%;
	}

	/* form表单 */
	.m-form {
		padding: 0rpx 30rpx;
	}
</style>
