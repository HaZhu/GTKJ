<template>
	<view>
		<uni-card title="个人中心" isShadow>
			<view style="display:flex;align-items:center;">
				<image src="/static/user.png" style="width:56px;height:56px;border-radius:50%;margin-right:12px;" />
				<view>
					<view>司机姓名：张三</view>
					<view>手机号：13800000000</view>
					<view>车牌号：新A22962D</view>
				</view>
			</view>
		</uni-card>
		<uni-list>
			<uni-list-item title="车型认证" clickable></uni-list-item>
			<uni-list-item title="设置密码" clickable></uni-list-item>
			<uni-list-item title="过磅说明" clickable></uni-list-item>
		</uni-list>
		<view style="height: 80px" />
		<foo-bar :active="4" @toIndex="toIndex" />
	</view>
</template>

<script>
import fooBar from '@/components/fooBar/fooBar.vue'
export default {
	components: { fooBar },
	data() {
		return {
			index: 4,
		}
	},
	methods: {
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
			if (url !== '/pages/truckDriver/profile/index') {
				uni.redirectTo({ url })
			}
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
