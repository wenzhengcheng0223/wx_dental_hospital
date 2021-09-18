<template>
	<view>
		<u-tabbar
		v-model="current" 
		:list="vuex_tabbar" 
		bg-color="#f4f4f4"
		:mid-button="false"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
