import appConfig from '@/config/config.js'
import {
	getBaseUrl
} from '@/utils/request.config.js'

const policyURL = 'openapi/common/upload/policy'
const uploadURL = 'openapi/common/upload'

// 通用上传地址
export const uploadAddress = getBaseUrl() + uploadURL

// 通用上传方法，请务必填写callback，根据返回值判断上传是否成功，成功返回url，不成功返回undefined
export function upload(data, callback) {
	if (appConfig.ossEnable) {
		return this.$u.get(policyURL).then(res => {
			const resData = res.data
			if (resData != null) {
				// 设置alioss上传参数
				resData.success_action_status = 200
				let fileName = data.name || 'unkown.jpg'
				resData.key = resData.dir + this.$u.guid() + this.$dy_tool.getSuffix(fileName)
				uni.uploadFile({
					url: resData.host,
					filePath: data,
					name: 'file',
					formData: resData,
					success: (res) => {
						if (res.code === 200 || res.code === 1 || res.statusCode === 200) {
							callback(resData.host + '/' + resData.key)
						} else {
							callback()
						}
					},
					fail: (err) => {
						callback()
					}
				})
			}
		})
	} else {
		let uploadHeader = {}
		uploadHeader[appConfig.tokenHeadName] = appConfig.tokenTypeName + this.vuex_token
		return uni.uploadFile({
			url: uploadAddress,
			header: uploadHeader,
			filePath: data.path || data,
			name: 'file',
			success: (res) => {
				let endData = JSON.parse(res.data) || {}
				if (res.statusCode === 200 && (endData.code === 200 || endData.code === 1)) {
					callback(endData.data.url)
				} else {
					callback()
				}
			},
			fail: (err) => {
				callback()
			}
		})
	}
}
