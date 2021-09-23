<template>
	<view >
		<my-navbar :mTitle = "mTitle"></my-navbar>
		<view style="margin-left: 288rpx;margin-top: 80rpx;">
			<u-image height="160" width="160" :src="src" shape="circle"></u-image>
		</view>
		<view style="margin: 40rpx 80rpx">
			<u-form :model="form" ref="uForm">
				<u-form-item>
					<wInput v-model="form.username" 
					type="number" maxlength="11" 
					placeholder="手机号" focus></wInput>
				</u-form-item>
				<u-form-item>
					<wInput v-model="form.password"
					type="password"  
					placeholder="登录密码"></wInput>
				</u-form-item>
			</u-form>
			<view style="margin-top: 40rpx;">
				<u-button 
				@click="submit()"
				plain="false" 
				type="info" 
				shape="circle" 
				hair-line="false">登录</u-button>
			</view>
			
			<view class="u-line-1 u-text-center" style="margin-top: 100rpx;">
				<u-icon @click="weixinLogin" name="weixin-circle-fill" size="60"></u-icon>
				<u-icon name="weibo-circle-fill" size="60" style="margin: 0rpx 60rpx;"></u-icon>
				<u-icon name="github-circle-fill" size="60"></u-icon>
			</view>
			<view class="u-text-center u-line-1 u-font-14" 
			style="margin-top: 20rpx;color: #24292E;">
				<text @click="findPassword">找回密码</text>
				<text style="margin: 0rpx 10rpx;">|</text>
				<text @click="register">注册账号</text>
			</view>
		</view>
	</view>
</template>
<script>

	export default {
		
	    data() {
	      return {
			mTitle:'登 录',
			src:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/d513ffda-0bc5-4ffe-bd2e-fe841f7ace42.jpg',
			form:{
				username:'',
				password:''				
			}
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
	    methods: {
			submit(){
				console.log('登录')
			},
			weixinLogin(){
				console.log('微信')
				this.$u.route('/pages/authorize/authorize')
			},
			register(){
				console.log('register')
			},
			findPassword(){
				console.log("findPassword")
			}
		}
	}
</script>

<style lang="scss">
</style>