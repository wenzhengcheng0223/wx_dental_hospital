<template>
	<view style="background-color: #ffffff;">
		<my-navbar></my-navbar>
		<view style="margin: 100rpx;margin-top: 200rpx;">
			
			<u-row>
				<u-col span="2">
					<u-icon color="#1daa07" name="weixin-circle-fill" size="100"></u-icon>
				</u-col>
				<u-col span="10">
					<view style="padding-top: 15px;margin-left: 10px;">
						<text style="font-size: 18px;font-weight: 700;">祖码农口腔医院：</text>						
						<text style="font-weight: 600;font-size: 16px;">申请</text>
					</view>
				</u-col>
			</u-row>
			<view style="margin: 10px 0px;">
			<u-line />
				
			</view>
			<view style="margin-top: 10px; font-weight: 500;font-size: 16px;font-weight: 600;">
				<text>获取你的昵称、头像、性别和地区</text>
			</view>
			<u-line />
			<view style="margin-top: 60px;font-weight: 600;font-size: 13px;">
				<text>同意</text>
				<text style="color: #2B85E4;">《用户授权协议》</text>
			</view>
			<view style="margin-top: 20px;" class="u-text-center">
				<u-button @click="back" size="medium" style="margin-right: 30px;">拒绝</u-button>
				<u-button open-type="getUserInfo" @getuserinfo="getUserInfo()" @click="getUserProfile()" type="primary" size="medium">同意</u-button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
	    data() {
	      return {
	        openId: '',
	        nickName: null,
	        avatarUrl: null,
			userInfo:{},
			code:'',
			canIGetUserProfile:false,
	      };
	    },
		onLoad() {
			const that = this
			uni.login({
			  provider: 'weixin',
			  success: function (loginRes) {
				  if(loginRes.errMsg=='login:ok'){
					that.canIGetUserProfile = true
					that.code = loginRes.code
					console.log("临时账号code获取成功:"+that.code);
				  }else{
					  console.log('授权失败')
				  }
			  }
			});
		},
		onShow() {
			
		},
	    methods: {
			toIndex(){
				
				setTimeout(() =>{
					console.log('test')
					this.$u.route({
						url:'/pages/index/index',
						type:'tab'
					})
				}, 1000);
				
			},
			getUserInfo(e){
				const that = this;
				var errMsg = e.detail.errMsg
				console.log(e)
				if(errMsg == 'getUserInfo:ok'){
					console.log('开始获取')
					that.getUserProfile()
				}else{
					console.log('获取失败')
				}
			},
			
			//登录授权
			getUserProfile(){
				const that = this;
				if(uni.getUserProfile){
					uni.getUserProfile({
						desc:'test',
						provider:'weixin',
						success(e) {
							console.log(that.userInfo)
							uni.showLoading({
								mask:true,
								title:'正在获取授权信息',
							})
							that.userInfo = e.userInfo
							console.log(e)
							uni.setStorageSync("userInfo",that.userInfo)
							that.login()
						},
						fail() {
							console.log('拒绝')
						}
					})
				}
			},
			
			login(){
				var that = this
				uni.request({
					url:'https://api.weixin.qq.com/sns/jscode2session',
					method:'GET',
					data:{
						'appid':'wx82bd6bd1e5c7e77c',
						'secret':'736f47efb255fbae65be8b2ac541b0fd',
						js_code:that.code,
						grant_type:'authorization_code'
					},
					success(e) {
						var errMsg = e.errMsg
						if(errMsg == "request:ok")
						{
							uni.showToast({
								title:'授权成功',
								mask:true,
								icon:'success'
							})	
							console.log(e)
							console.log('授权中')	
							that.toIndex()
						}
						
					},
					fail(e) {
						console.log(e)
						uni.showToast({
							icon:'error',
							title:'请联系管理员',
							mask:true
						})
					}
				})
			},
			back(){
				this.$u.route({
					url:'/pages/login/login',
					type:'navigateBack',
					delta:1
				})
			}
		}
	}
</script>