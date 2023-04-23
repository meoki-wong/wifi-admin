<!-- 病理参数
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 1
 -->
<template>
	<view>
<!-- 	<view class="cu-bar bg-gradual-blue" >
		<view class="action">
			<text class="cuIcon-back text-gray" ></text>
			 <view @click="goIndex">
				 返回
			 </view>
		</view>
		<view class="content text-bold">
			操作条
		</view>
	</view> -->

		<cu-custom bgColor="bg-gradual-blue" :isBack="true" >
		<block slot="backText">返回</block>
		<block slot="content">绑定关系</block>
	</cu-custom>
	
		<!-- <view class="pics">
	
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(index,item.id)" :class="active===index?'active':''"
				v-for="(item,index) in cates" :key="item.id">
				{{item.ctitle}}
			</view>
		</scroll-view>
	
	</view> -->


		<view>
			<scroll-view scroll-y class="page">
				<image src="/static/img/ads.jpeg" mode="widthFix" class="response"></image>
				<view class="nav-list">
					<navigator hover-class="none" :url="'/pages/bladderData/' + item.name" class="nav-li" navigateTo
						:class="'bg-'+item.color" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
						v-for="(item,index) in elements1" :key="index">
						<view class="nav-title">{{item.title}}</view>
						<view class="nav-name">{{item.desc}}</view>
						<text :class="'cuIcon-' + item.cuIcon"></text>
					</navigator>

					<navigator hover-class="none" :url="'/pages/urineData/' + item.name" class="nav-li" navigateTo
						:class="'bg-'+item.color" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
						v-for="(item,index) in elements2" :key="index">
						<view class="nav-title">{{item.title}}</view>
						<view class="nav-name">{{item.desc}}</view>
						<text :class="'cuIcon-' + item.cuIcon"></text>
					</navigator>
				</view>
				<view class="cu-tabbar-height"></view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				elements1: [{
					title: '绑定商户',
					name: 'index',
					desc: '商家角色赋权',
					color: 'cyan',
					cuIcon: 'newsfill',
					auth: 'ac'
				}],
				elements2: [{
					title: '绑定代理',
					name: 'index',
					desc: '代理角色赋权',
					color: 'red',
					cuIcon: 'newsfill',
					auth: 'ac'
				}]
			}
		},
		// onUnload：监听页面的卸载
		// 当前处于A页面，点击返回按钮时，则将是A页面卸载
		onUnload() {
			uni.switchTab({
				url: '../index/index'
			})
		},
		methods: {
			
		},
		onLoad() {
			// this.getPicsCate()

		}
	}
</script>

<style lang="scss">

	// page {
	// 	height: 100%;
	// }

	// .pics {
	// 	height: 100%;
	// 	// 一行显示
	// 	display: flex;

	// 	.left {
	// 		width: 100%;
	// 		height: 100%;
	// 		border-right: 1px solid #eee;

	// 		view {
	// 			height: 60px;
	// 			line-height: 60px;
	// 			color: #333;
	// 			text-align: center;
	// 			font-size: 30rpx;
	// 			border-top: 1px solid #eee;
	// 		}

	// 		// 选中颜色
	// 		.active {
	// 			background: $search-color;
	// 			color: #fff;
	// 		}
	// 	}

	// 	.right {
	// 		height: 100%;
	// 		width: 520rpx;
	// 		margin: 10rpx auto;

	// 		.item {
	// 			image {
	// 				width: 520rpx;
	// 				height: 520rpx;
	// 				border-radius: 5px;
	// 			}

	// 			.lname {
	// 				font-size: 35rpx;
	// 				color: $search-color;
	// 				line-height: 80rpx;

	// 				text:nth-child(2) {
	// 					color: #ccc;
	// 					font-size: 28rpx;
	// 					// text-decoration: line-through;
	// 					margin-left: 20rpx;
	// 				}
	// 			}

	// 			.box2 {
	// 				padding: 0 10px;
	// 				font-size: 32rpx;
	// 				line-height: 70rpx;
	// 			}

	// 			.line {
	// 				height: 10rpx;
	// 				width: 750rpx;
	// 				background: #eee;
	// 			}

	// 		}
	// 	}
	// }
</style>
