<template>
	<view class="wrap">
		<u-row class=""  gutter="10" >
			<u-col span="6">
				<view class="u-rela">			
					<view class="u-abso u-text-left left-text"
					style="color: #0038aa;">
						<view class="u-font-40">
							<text>关注健康</text>					
						</view>
						<view class="u-font-16">
							<text>Attention Health</text>	
						</view>						
					</view>
					<u-image 
					border-radius="5" 
					width="375" 
					height="375" 
					mode="aspectFill" 
					src = "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/20987950-94a1-4936-a8f9-36f081565ed8.jpg"/>
				</view>
			</u-col>
			<u-col span="6">
				<view class="u-rela">			
					<view class="u-abso u-text-right right-text"
					style="color: #FFFFFF;">
						<view class="u-font-40">
							<text>医者仁心</text>					
						</view>
						<view class="u-font-16">
							<text>Healer Kung</text>	
						</view>						
					</view>
					<view class="u-abso lay-image"></view>
					<u-image 
					border-radius="5" 
					width="375" 
					height="375" 
					mode="aspectFill" 
					src = "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/1767f217-124a-473f-8a11-07214a77b93c.jpg"/>
				</view>
			</u-col>
			<u-col span="6">
				<view class="u-rela" >			
					<view class="u-abso u-text-left left-text"
					style="color: #FFFFFF;">
						<view class="u-font-40">
							<text>自信笑容</text>					
						</view>
						<view class="u-font-16">
							<text>Confident Smile</text>	
						</view>						
					</view>
					<view class="u-abso lay-image" >
						
					</view>
					<u-image 
					border-radius="5" 
					width="375" 
					height="375" 
					mode="aspectFill" 
					src = "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/a4cbbb8d-e40e-41a5-8a9e-328c8ca8c5df.jpg"/>
				</view>
			</u-col>
			<u-col span="6">
				<view class="u-rela u-padding-0 ">			
					<view class="u-abso u-text-right right-text "
					style="color: #0038aa;">
						<view class="u-font-40">
							<text>品质生活</text>					
						</view>
						<view class="u-font-16">
							<text>Quality Life</text>	
						</view>						
					</view>
					<u-image 
					border-radius="5" 
					width="375" 
					height="375" 
					mode="aspectFill"  
					src = "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a9e890e8-9456-42bd-8ad5-cc3d81f39d95/4afa9fc8-8e03-4495-8a94-825e7d59c69e.jpg"/>
				</view>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		
		data(){
			return{
				
			}
		},
		methods : {
			
		}
		
	}
	
</script>

<style scoped lang="scss">
	.wrap {
		padding: 0rpx;
	}
	.left-text{
		top: 70%; 
		left: 30rpx;
		z-index: 10;
	}
	.right-text{
		top: 70%; 
		right: 30rpx;
		z-index: 10;
	}
	.lay-image{
		padding: 0rpx;
		width: 374rpx;
		height: 374rpx; 
		background-color: #0096e160;
		z-index: 9;
	}
</style>

