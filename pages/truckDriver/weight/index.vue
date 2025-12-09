<template>
	<view>
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
				<view class="row">车牌号：新A22962D</view>
				<view class="row">识别号：新A22962D</view>
				<view class="row">重量：<text class="bold">66.45吨</text></view>
				<view class="row">磅房名称：老石旦煤矿北磅</view>
				<view class="row">称量类型：第二次称重</view>
				<view class="row">异常状态：正常</view>
				<view class="row">称重时间：2025-12-05 11:28:51</view>
				<view class="row">销售计划编号：DX2025-02203</view>
				<view class="row">供货单位：海南煤炭加工有限公司（老石旦洗煤厂）</view>
				<view class="row">收货单位：国能宁夏能源煤炭有限公司（大武口）</view>
				<view class="actions">
					<button class="btn" type="primary" size="mini">详情</button>
				</view>
			</uni-card>
		</view>
		<view style="height: 80px" />
		<foo-bar :active="2" @toIndex="toIndex" />
	</view>
</template>

<script>
import fooBar from '@/components/fooBar/fooBar.vue'
export default {
	components: { fooBar },
	data() {
		return {
			date: this.formatDate(new Date()),
			index: 2,
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
			if (url !== '/pages/truckDriver/weight/index') {
				uni.redirectTo({ url })
			}
		},
		prev(){ if(this.page>1) this.page-- },
		next(){ if(this.page<this.totalPage) this.page++ }
	}
}
</script>

<style lang="scss" scoped>
.bar{ padding:8px 12px; }
.date{ padding:10px 12px; background:#fff; border-radius:6px; }
.pager{ display:flex; justify-content:space-between; padding:8px 12px; color:#666; }
.pager .prev,.pager .next{ color:#1a73e8; }
.row{ color:#666; line-height:22px; }
.bold{ font-weight:700; }
.actions{ display:flex; justify-content:flex-end; margin-top:6px; }
</style>
