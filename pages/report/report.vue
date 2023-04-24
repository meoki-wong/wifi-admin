<!-- 事件报表
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 15
 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">事件报表</block>
		</cu-custom>
		<view class="page">
		
		
			<!-- <uni-section :title="'您选择的时间为：' + '[' + datetimerange + ']' " type="line"></uni-section> -->
			<!-- <uni-section title="请选择您要查询的时间" type="line"></uni-section>
			<view class="example-body">
				<uni-datetime-picker v-model="datetimerange" type="datetimerange" start="2000-3-20 12:00:00"
					end="2024-3-20 12:00:00" rangeSeparator="至" />
			</view> -->
		
		
		
			<uni-section title="当前剩余总积分" type="line"></uni-section>
			<view>
				<uni-table border stripe emptyText="暂无更多数据">
					<!-- 表头行 -->
					<uni-tr>
						
						<uni-th align="left">角色</uni-th>
						<uni-th align="left">当前账户</uni-th>
						<uni-th align="center">剩余总积分</uni-th>
					
					</uni-tr>
		
					<!-- 表格数据行 -->
					<uni-tr>
						<uni-td>
							{{userType == 1? "超级用户" : userType == 3? "代理": "商户"}}
						</uni-td>
						<uni-td>
							{{info.userNo}}
						</uni-td>
						<uni-td>
							{{info.score}}
						</uni-td>
						
		
					</uni-tr>
			
		
				</uni-table>
		
			</view>
		
		
			<!-- <view class="goods-carts">
				<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
					@buttonClick="buttonClick" />
			</view> -->
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				// format: true
			})
			return {
				datetimerange: ['2000-03-20 20:10:10', currentDate],
				findlist: [],
				options: [],
				buttonGroup: [{
					text: '查询',
					backgroundColor: '#0392ff',
					color: '#fff'
				}],
				info: {},
				userType: 2
			}
		},

		watch: {
			datetimerange(newval) {
				console.log('范围选:', this.datetimerange[0] || []);
				console.log('范围选:', this.datetimerange[1] || []);
			}
		},

		methods: {
			// 获取当前时间
			async getData(){
				let res = await this.$myRequest({
					url: '/searchScore',
					method: 'POST',
					data: {
						ruleNumber: uni.getStorageSync('userInfo').uuid
					}, // 发送的数据

				})
				console.log('====inti', res.data);
				if(res.data.code == 200){
					this.info = res.data.data
				}
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				let hours = date.getHours()
				let minutes = date.getMinutes();
				let seconds = date.getSeconds();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			},
			change(e) {
				this.single = e
				console.log('----change事件:', this.single = e);
			}
		},
		onLoad() {
			// this.getFindList()
			this.getData()
		},
		onShow(){
			this.userType = uni.getStorageSync('userInfo').role_type
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.goods-carts {
		/* #ifndef APP-NVUE */
		// display: flex;
		left: var(--window-left);
		right: var(--window-right);
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
</style>
