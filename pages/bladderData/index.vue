<!-- 膀胱动力学参数
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 1
 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">商户信息绑定</block>
		</cu-custom>

		<view class="box">
			<view class="tit">请添加绑定商户信息</view>
			<view class="ul">
				<scroll-view>
					<!-- 方案一 -->
					<uni-forms ref="form">
						<!-- 	<uni-forms-item label="病患编号:" name="patientDataId">
							<input class="input" disabled="true" type="text" v-model="info.patient_data_id" />
						</uni-forms-item> -->

						<!-- <uni-forms-item label="数据编号:" name="id">
							<input class="input" disabled="true" type="text" v-model="info.id" />
						</uni-forms-item> -->

						<uni-forms-item
							label="商户地址:"
							name="address"
						>
							<input
								class="input"
								type="text"
								v-model="info.address"
								placeholder="请填写商户详细地址"
							/>
						</uni-forms-item>

						<uni-forms-item
							label="性别:"
							name="bladderDetrusorPressure"
						>
							<radio-group @change="sexyChange">
								<label
									class="uni-list-cell uni-list-cell-pd"
									v-for="(item, index) in sexyList"
									:key="item.value"
								>
									<view>
										<radio
											:value="item.value"
											:checked="index === 0"
										/>
									</view>
									<view class="itemName">{{ item.name }}</view>
								</label>
							</radio-group>
						</uni-forms-item>
						<uni-forms-item label="角色:" name="bladderCompliance">
							<radio-group @change="ruleChange">
								<label
									class="uni-list-cell uni-list-cell-pd"
									v-for="(item, index) in userList"
									:key="item.value"
								>
									<view>
										<radio
											:value="item.value"
										/>
									</view>
									<view class="itemName">{{ item.name }}</view>
								</label>
							</radio-group>
						</uni-forms-item>
						<uni-forms-item
							label="绑定账号信息:"
							name="topRuleNumber"
						>
							<input
								class="input"
								type="text"
								v-model="info.ruleNumber"
								placeholder="请输入需要绑定的账号信息"
							/>
						</uni-forms-item>
						<uni-forms-item
							label="绑定上级角色:"
							name="bladderCompliance"
						>
							<radio-group @change="topRuleChange">
								<label
									class="uni-list-cell uni-list-cell-pd"
									v-for="(item, index) in roleList"
									:key="item.value"
								>
									<view>
										<radio
											:value="item.value"
										/>
									</view>
									<view class="itemName">{{ item.name }}</view>
								</label>
							</radio-group>
						</uni-forms-item>
						<uni-forms-item
							label="绑定上级账号:"
							name="topRuleNumber"
						>
							<input
								class="input"
								type="text"
								v-model="info.topRuleNumber"
								placeholder="请输入代理或者超级用户账号信息"
							/>
						</uni-forms-item>
					</uni-forms>

					<view class="btn_login" @click="postInfo"> 提交 </view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pwd_show: true,
			info: {
				rule: "",
				sexy: 1,
				topRule: "",
				address: "",
				topRuleNumber: "",
				ruleNumber: ""

			},
			roleList: [
				{
					name: '代理',
					value: 3
				},
				{
					name: '超级用户',
					value: 1
				}
			],
			userList: [
				{
					name: '代理',
					value: 3
				},
				{
					name: '商户',
					value: 2
				}
			],
			sexyList: [
				{
					name: '男',
					value: 1
				},
				{
					name: '女',
					value: 2
				}
			]
		};
	},
	methods: {
		ruleChange(e){
			console.log('===e', e);
			this.info.rule = e.detail.value
		},
		sexyChange(e){
			this.info.sexy = e.detail.value
		},
		topRuleChange(e){
			this.info.topRule = e.detail.value
		},
		//修改事件
		async postInfo() {
			let obj = this.info
			console.log('====this.info', this.info);
			let res = await this.$myRequest({
					url: '/editRole',
					method: 'POST',
					data: obj, // 发送的数据

				})
				if(res.data.code == 200){
					this.$tip.success('绑定成功!')
					uni.navigateBack();
				}
		},

		// 查询信息
		// async getInfo() {
		// 	const res = await this.$myRequest({
		// 		url: '/bladderData/id?limit=1&page=1&sort=1&id=' + this.id
		// 	})
		// 	console.log("res==>" + this.id)
		// 	this.info = res.data.data.items[0]
		// },
	},

};
</script>

<style lang="scss">
@import "@/common/uni-nvue.scss";

.goods-carts {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	position: fixed;
	left: 0;
	right: 0;
	/* #ifdef H5 */
	left: var(--window-left);
	right: var(--window-right);
	/* #endif */
	bottom: 0;
}

.demo-uni-row {
	margin-bottom: 10px;
	/* QQ、字节小程序文档写有 :host，但实测不生效 */
	/* 百度小程序没有 :host，需要设置block */
	/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
	display: block;
	/* #endif */
}

/* 支付宝小程序没有 demo-uni-row 层级 */
/* 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级 */
/* #ifdef MP-ALIPAY || MP-WEIXIN */
/deep/ .uni-row {
	margin-bottom: 10px;
}

/* #endif */

.demo-uni-col {
	height: 36px;
	border-radius: 4px;
}

.dark_deep {
	background-color: #99a9bf;
}

.dark {
	background-color: #d3dce6;
}

.btn_login {
	margin-top: 88rpx;
	margin-bottom: 32rpx;
	width: 590rpx;
	height: 120rpx;
	background: #3790ff;
	border-radius: 60rpx;
	font-size: 36rpx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #ffffff;
	text-align: center;
	line-height: 120rpx;
}

.light {
	background-color: #e5e9f2;
}

.example-body {
	padding: 0px 12px;
	background-color: #ffffff;
}

.result-box {
	text-align: center;
	padding: 20px 0px;
	font-size: 16px;
}

.box {
	width: 100vw;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 0 80rpx;
	box-sizing: border-box;

	.tit {
		width: 100%;
		font-size: 50rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
		margin-top: 40rpx;
		margin-bottom: 124rpx;
	}

	.ul {
		width: 100%;
		display: flex;
		flex-direction: column;

		.li {
			margin-bottom: 30rpx;
			display: flex;
			align-items: center;
			width: 100%;
			height: 80rpx;
			border-bottom: 2rpx solid #eeeeee;

			.title {
				height: 40rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #333333;
				line-height: 40rpx;
			}

			.xiala {
				width: 12rpx;
				height: 6rpx;
				margin-left: 5rpx;
			}

			.shu {
				width: 2rpx;
				height: 52rpx;
				margin-left: 36rpx;
				background: #3790ff;
				margin-right: 20rpx;
			}

			.pr {
				flex: 1;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
			}

			.img {
				font-size: 28rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #3790ff;
				line-height: 40rpx;
			}

			.remove {
				width: 38rpx;
				height: 38rpx;
			}

			.yc {
				width: 48rpx;
				height: 30rpx;
			}

			.xs {
				width: 48rpx;
				height: 22rpx;
			}
		}
	}

	.btn_login {
		margin-top: 88rpx;
		margin-bottom: 32rpx;
		width: 590rpx;
		height: 120rpx;
		background: #3790ff;
		border-radius: 60rpx;
		font-size: 36rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #ffffff;
		text-align: center;
		line-height: 120rpx;
	}

	.btn2 {
		background-color: #3790ff !important;
	}

	.select_login {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #9395a2;
	}

	.des {
		position: absolute;
		bottom: 40rpx;
		width: 648rpx;
		font-size: 24rpx;
		margin-bottom: 40rpx;
		margin-top: 70rpx;
		text-align: center;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #afafb8;
		line-height: 40rpx;

		.text1 {
			margin-left: 10rpx;
			color: #333333 !important;
		}

		.text2 {
			color: #3790ff !important;
		}
	}
}

/deep/.uni-forms-item__content {
	display: flex;
	align-items: center;
}
/deep/.uni-list-cell{
	display: flex;
}
.itemName{
	margin-left: 10px;
	margin-bottom: 20px;
}
</style>
