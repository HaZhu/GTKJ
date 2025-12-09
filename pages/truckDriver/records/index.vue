<template>
	<view>
		<view class="tabs">
			<text
				v-for="(t,i) in tabs" :key="t"
				:class="['tab', {active: statusIndex===i}]"
				@click="statusIndex=i"
			>{{ t }}</text>
		</view>
		<view class="bar">
			<picker mode="date" :value="date" @change="onDateChange">
				<view class="date">{{ date }} ▼</view>
			</picker>
		</view>
		<view class="pager">
			<text class="prev" @click="prev">上一页</text>
			<text>第{{page}}/{{totalPage}}页, 共{{total}}条</text>
			<text class="next" @click="next">下一页</text>
		</view>
		<view v-for="(item,i) in 2" :key="i">
			<uni-card :is-shadow="true">
				<view class="card-title">2025-12-05 16:38:15 <text class="state">待审核</text></view>
				<view class="row">江西核工业建设有限公司</view>
				<view class="row">发货地址：内蒙古自治区乌海市乌达区黄白茨</view>
				<view class="row">收货地址：内蒙古自治区乌海市海勃湾区煤炭加工中心</view>
				<view class="row">运价：<text class="bold">8.00元/吨公里</text></view>
				<view class="row g">开始时间：2025-12-05 00:00:00</view>
				<view class="row g">结束时间：2025-12-05 23:59:59</view>
				<view class="row">派车计划编号：NX2025-00250_0433</view>
				<view class="row">销售计划编号：NX2025-00250</view>
				<view class="row">是否磅码：是</view>
			</uni-card>
		</view>
		<view style="height: 80px" />
		<foo-bar :active="1" @toIndex="toIndex" />
	</view>
</template>

<script>
import fooBar from '@/components/fooBar/fooBar.vue'
export default {
	components: { fooBar },
	data() {
		return {
			date: this.formatDate(new Date()),
			index: 1,
			tabs: ['待审核','待付款','待完成','已完成','全部'],
			statusIndex: 4,
			page: 1,
			totalPage: 1,
			total: 2
		}
	},
	methods: {
		formatDate(d){
			const y=d.getFullYear(); const m = (d.getMonth()+1+'').padStart(2,'0'); const day=(d.getDate()+'').padStart(2,'0');
			return `${y}-${m}-${day}`
		},
		onDateChange(e){ this.date = e.detail.value },
		toIndex(index){
			this.index = index
			const routes = [
				'/pages/truckDriver/home/index',
				'/pages/truckDriver/records/index',
				'/pages/truckDriver/weight/index',
				'/pages/truckDriver/bill/index',
				'/pages/truckDriver/profile/index'
			]
			const url = routes[index] || routes[0]
			if (url !== '/pages/truckDriver/records/index') {
				uni.redirectTo({ url })
			}
		},
		prev(){ if(this.page>1) this.page-- },
		next(){ if(this.page<this.totalPage) this.page++ }
	}
}
</script>

<style lang="scss" scoped>
.tabs{ display:flex; justify-content:space-around; padding:8px 6px; background:#fff; }
.tab{ color:#666; font-size:14px; padding:6px 8px; }
.tab.active{ color:#1a73e8; font-weight:700; }
.bar{ padding:8px 12px; }
.date{ padding:10px 12px; background:#fff; border-radius:6px; }
.pager{ display:flex; justify-content:space-between; padding:8px 12px; color:#666; }
.pager .prev,.pager .next{ color:#1a73e8; }
.card-title{ font-weight:700; font-size:14px; margin-bottom:6px; display:flex; justify-content:space-between; }
.state{ color:#999; font-size:12px; }
.row{ color:#666; line-height:22px; }
.row.g{ color:#0a9f3a; font-weight:700; }
.bold{ font-weight:700; }
</style>
