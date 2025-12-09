<template>
	<view>
		<view class="bar">
			<picker mode="date" :value="date" @change="onDateChange">
				<view class="date">{{ date }} ▼</view>
			</picker>
		</view>
		<view class="summary">
			<view class="item">毛重：<text class="bold">66.45吨</text></view>
			<view class="item">皮重：<text class="bold">18.60吨</text></view>
			<view class="item">净重：<text class="bold">47.85吨</text></view>
			<view class="item">车数：<text class="bold">1辆</text></view>
		</view>
		<uni-search-bar placeholder="搜索" />
		<view class="pager">
			<text class="prev" @click="prev">上一页</text>
			<text>第{{page}}/{{totalPage}}页, 共{{total}}条</text>
			<text class="next" @click="next">下一页</text>
		</view>
		<view v-for="(item,i) in 1" :key="i">
			<uni-card :is-shadow="true">
				<view class="card-title">
					<text>磅单编号：GTHNLSD-20251205-0061</text>
					<text class="ok">正常</text>
				</view>
				<view class="row">驾驶员名字：李显广</view>
				<view class="row">车牌号：新A22962D</view>
				<view class="row">手机号码：18995203555</view>
				<view class="row">供货单位：海南煤炭加工有限公司（老石旦洗煤厂）</view>
				<view class="row">收货单位：国能宁夏能源煤炭有限公司（大武口）</view>
				<view class="row">产品分类：混煤  规格：海混3200</view>
				<view class="row">销售计划编号：DX2025-02203</view>
				<view class="row">一次称重时间：2025-12-05 10:58:50</view>
				<view class="row">二次称重时间：2025-12-05 11:28:51</view>
				<view class="row">磅单生成时间：2025-12-05 11:28:51</view>
				<view class="row">质管站：老石旦质量管理站</view>
				<view class="row">毛重：66.45吨  皮重：18.60吨  净重：47.85吨</view>
				<view class="row">扣吨：0.00吨  涨亏：0.00吨</view>
				<view class="actions">
					<button class="btn" type="primary" size="mini">详情</button>
				</view>
			</uni-card>
		</view>
		<view style="height: 80px" />
		<foo-bar :active="3" @toIndex="toIndex" />
	</view>
</template>

<script>
import fooBar from '@/components/fooBar/fooBar.vue'
export default {
	components: { fooBar },
	data() {
		return {
			date: this.formatDate(new Date()),
			index: 3,
			page: 1,
			totalPage: 1,
			total: 1
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
			if (url !== '/pages/truckDriver/bill/index') {
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
.summary{ display:flex; flex-wrap:wrap; padding:8px 12px; gap:8px; }
.summary .item{ background:#fff; border-radius:6px; padding:8px 10px; color:#444; font-size:13px; }
.pager{ display:flex; justify-content:space-between; padding:8px 12px; color:#666; }
.pager .prev,.pager .next{ color:#1a73e8; }
.card-title{ display:flex; justify-content:space-between; font-weight:700; font-size:14px; margin-bottom:6px; }
.ok{ color:#0a9f3a; }
.row{ color:#666; line-height:22px; }
.bold{ font-weight:700; }
.actions{ display:flex; justify-content:flex-end; margin-top:6px; }
</style>
