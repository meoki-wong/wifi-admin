<!-- 用户详情编辑页面
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 7 30
 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">编辑资料</block>
		</cu-custom>
		<form>
			<view class="cu-form-group">
				<view class="title">姓名</view>
				<input placeholder="请输入姓名" name="input" v-model="info.userName"></input>
			</view>

			<!-- <view class="cu-form-group margin-top">
				<view class="title">性别</view>
				<switch class='switch-sex' @change="SwitchC" :class="switchC?'checked':''"
					:checked="switchC?true:false"></switch>
			</view> -->



			<view class="cu-form-group margin-top">
				<view class="title">手机号码</view>
				<input placeholder="输入手机号码" name="input" v-model="info.telephone"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">地址</view>
				<input placeholder="输入地址" name="input" v-model="info.address"></input>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-blue lg" @click="onSubmit">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {},
				index: -1,
				switchC: true,
				imgList: [],
				uploadUrl: "/sys/common/upload",
				myFormData: {
					avatar: '',
					realname: '',
					username: '',
					sex: 1,
					birthday: '',
					orgCode: '',
					workNo: '',
					phone: '',
					email: '',
					id: '',
				},
			};
		},
		onLoad: function(option) {

		},
		methods: {
			async onSubmit() {
				let myForm = this.info
				let checkPhone = new RegExp(/^[1]([3-9])[0-9]{9}$/);
				let checkEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
				console.log("myForm", myForm)
				if (!myForm.telephone || myForm.telephone.length == 0) {
					this.$tip.alert('请输入手机号');
					return false
				}
				if (!checkPhone.test(myForm.telephone)) {
					this.$tip.alert('请输入正确的手机号');
					return false
				}
				const _this = this // 获取此时的this为一个常量，防止下面请求回调改变出错
				this.info.ruleNumber = uni.getStorageSync('userInfo').uuid;
				// 提交跳转
				let res = await this.$myRequest({
					url: '/editUserInfo',
					method: 'post',
					data: _this.info, // 发送的数据

				})
				if(res.data.code == 200){
					uni.clearStorageSync()
					uni.navigateTo({
						url: '/pages/login/login_v2'
					})
				}
				
				// .then((res) => {
				// 	console.log(res)
				// 	this.loading = false;
				// 	if (res.data.code === 20000) { // 获取数据成功
				// 		console.log("成功")

				// 		uni.switchTab({
				// 			url: '../people/people'
				// 		})
				// 		this.$tip.success('修改成功!')
				// 	} else if (res.data.code === 500) { // 获取数据失败
				// 		console.log("失败")
				// 		this.loading = false;
				// 		this.$tip.alert(res.data.message);
				// 	}
				// }).catch((err) => {
				// 	let msg = "请求出现错误，请稍后再试"
				// 	this.loading = false;
				// 	this.$tip.alert(msg);
				// }).finally(() => {
				// 	this.loading = false;
				// })
			},





			DateChange(e) {
				this.myFormData.birthday = e.detail.value
			},
			SwitchC(e) {
				this.switchC = e.detail.value
			}
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
