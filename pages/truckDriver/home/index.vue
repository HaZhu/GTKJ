<template>
	<view>	
		<uni-search-bar placeholder="搜索" />
		<view class="plate-notice">
			<text class="plate">当前车牌号：新A22962D</text>
			<text class="tip">（注：当前车牌号必须与实际车辆车牌号一致）</text>
		</view>
		<view class="pager">
			<text class="prev" @click="prev">上一页</text>
			<text>第{{page}}/{{totalPage}}页, 共{{total}}条</text>
			<text class="next" @click="next">下一页</text>
		</view>
		<view v-for="(item,i) in 2" :key="i">
			<uni-card :is-shadow="true">
				<view class="card-title">江西核工业建设有限公司</view>
				<view class="row">发货地址：内蒙古自治区乌海市乌达区黄白茨</view>
				<view class="row">收货地址：内蒙古自治区乌海市海勃湾区煤炭加工中心</view>
				<view class="row">运价：<text class="bold">8.00元/吨公里</text></view>
				<view class="row">里程：<text class="bold">10.00公里</text></view>
				<view class="row g">开始时间：2025-12-05 00:00:00</view>
				<view class="row g">结束时间：2025-12-05 23:59:59</view>
				<view class="row">产品分类：焦煤  规格：焦煤12#</view>
				<view class="row">派车计划编号：NX2025-00250_0433</view>
				<view class="row">销售计划编号：NX2025-00250</view>
				<view class="row">计划类型：内销</view>
				<view class="row">收货单位：乌达煤炭加工公司</view>
				<view class="row">物流公司：江西核工业建设有限公司</view>
				<view class="row">备注：—</view>
				<view class="actions">
					<button class="btn" type="primary" size="mini">抢单</button>
				</view>
			</uni-card>
		</view>
		<view style="height: 80px" />
		<foo-bar :active="0" @toIndex="toIndex"></foo-bar>
	</view>
</template>

<script>
	import fooBar from  '@/components/fooBar/fooBar.vue'
	export default {
		components:{
			fooBar
		},
		data() {
			return {
				show: false,
				index: 0,
				page: 1,
				totalPage: 2,
				total: 12
			}
		},
		onLoad() {

		},
		methods: {
			toIndex(index){
				// index 当前页面的索引
				this.index = index
				// 根据index判断页面
				// 修改自定义导航标题等
				const routes = [
					'/pages/truckDriver/home/index',
					'/pages/truckDriver/records/index',
					'/pages/truckDriver/weight/index',
					'/pages/truckDriver/bill/index',
					'/pages/truckDriver/profile/index'
				]
				const url = routes[index] || routes[0]
				if (url !== '/pages/truckDriver/home/index') {
					uni.redirectTo({ url })
				}
			},
			prev(){ if(this.page>1) this.page-- },
			next(){ if(this.page<this.totalPage) this.page++ }
		}
	}
</script>

<style lang="scss" scoped>
.plate-notice{ padding:6px 12px; text-align:center; }
.plate{ color:#e53935; font-weight:700; margin-right:4px; }
.tip{ color:#e53935; }
.pager{ display:flex; justify-content:space-between; padding:8px 12px; color:#666; }
.pager .prev,.pager .next{ color:#1a73e8; }
.card-title{ font-weight:700; font-size:15px; margin-bottom:6px; }
.row{ color:#666; line-height:22px; }
.row.g{ color:#0a9f3a; font-weight:700; }
.bold{ font-weight:700; }
.actions{ display:flex; justify-content:flex-end; margin-top:6px; }
</style>
