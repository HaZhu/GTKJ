<template>
  <view>
    <view v-for="(item, i) in 5" :key="i">
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
.row {
  color: #666;
  line-height: 22px;
}
.bold {
  font-weight: 700;
}
.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
}
</style>
