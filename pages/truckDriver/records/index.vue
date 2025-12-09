<template>
  <view>
    <view v-for="(item, i) in 6" :key="i">
      <uni-card :is-shadow="true">
        <view class="card-title"
          >2025-12-05 16:38:15 <text class="state">待审核</text></view
        >
        <view class="row">江西核工业建设有限公司</view>
        <view class="row">发货地址：内蒙古自治区乌海市乌达区黄白茨</view>
        <view class="row"
          >收货地址：内蒙古自治区乌海市海勃湾区煤炭加工中心</view
        >
        <view class="row">运价：<text class="bold">8.00元/吨公里</text></view>
        <view class="row g">开始时间：2025-12-05 00:00:00</view>
        <view class="row g">结束时间：2025-12-05 23:59:59</view>
        <view class="row">派车计划编号：NX2025-00250_0433</view>
        <view class="row">销售计划编号：NX2025-00250</view>
        <view class="row">是否磅码：是</view>
      </uni-card>
    </view>
   
  </view>
</template>

<script>
export default {
    props:{
    listData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
  
    };
  },
  methods: {
  
  },
};
</script>

<style lang="scss" scoped>
.card-title {
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
}
.state {
  color: #999;
  font-size: 12px;
}
.row {
  color: #666;
  line-height: 22px;
}
.row.g {
  color: #0a9f3a;
  font-weight: 700;
}
.bold {
  font-weight: 700;
}
</style>
