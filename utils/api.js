// 异步请求接口封装
// const BASE_URL = 'http://localhost:8091'
const BASE_URL = 'http://192.168.43.38:8091'
export const  myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BASE_URL+options.url,
			method: options.method || 'GET' || 'POST' || 'PUT',
			data: options.data || {},
			success: (res) => {
				if(res.data.code !==20000) {
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败'
		})
		reject(err)
		},
		})
	})
};
export default {
	BASE_URL,
	myRequest			
}

/* myRequest({
	url: '/unbo',
	method: 'POST',
	data:{
		
	}
}) */


