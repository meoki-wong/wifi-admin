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
		
		
		
			<uni-section title="日报表数据" type="line"></uni-section>
			<view>
				<uni-table border stripe emptyText="暂无更多数据">
					<!-- 表头行 -->
					<uni-tr>
						<uni-th align="center">角色</uni-th>
						
						<uni-th align="left">名称</uni-th>
						<uni-th align="left">账号</uni-th>
						<uni-th align="left">联系方式</uni-th>
						<uni-th align="center">绑定时间</uni-th>
					
					</uni-tr>
		
					<!-- 表格数据行 -->
					<uni-tr v-for="(item,index) in info" :key="index">
						<uni-td>
							{{item.role_type == 1? "超级用户" : item.role_type == 3? "代理" : "商家"}}
						</uni-td>
						
						<uni-td>
							{{item.userName}}
						</uni-td>
						<uni-td>
							{{item.uuid}}
						</uni-td>
						<uni-td>
							{{item.telephone}}
						</uni-td>
						<uni-td>
							{{item.recommended_time}}
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
				info: []
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
			getDate(){

			},
			async getData() {
				// reports
				// topRoleNumber
				let res = await this.$myRequest({
					url: '/reports',
					method: 'POST',
					data: {
						topRoleNumber: uni.getStorageSync('userInfo').uuid,
						timeType: 3 // 日
					}, // 发送的数据

				})
				console.log('=====res', res.data);
				if(res.data.code == 200){
					this.info = res.data.data
				}
			},
			change(e) {
				this.single = e
				console.log('----change事件:', this.single = e);
			}
		},
		onLoad() {
			// this.getFindList()
			this.getData()
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
