<template>
	<view class="flex-col justify-start relative page">
	  <view class="flex-col justify-start items-center image-wrapper">
	    <image
	      class="image"
	      src="https://ide.code.fun/api/image?token=6930ce0d9520a30011f760e3&name=17434277476421726471.png"
	    />
	  </view>
	  <text class="text">国泰科技</text>
	  <view class="group_2 ">
		<image
			class="image_4 "
			src="https://ide.code.fun/api/image?token=6930ce0d9520a30011f760e3&name=8662e6822c3ee3f15f8cabb5b701208f.png"
		/>
	    <text class="font_3">我已阅读并同意</text>
	    <text class="font_4">《国泰科技隐私保护协议》</text>
	  </view>
	  <view   @click="goToNext" class="flex-col justify-start items-center text-wrapper_22"><text class="font_2 text_7">一键登录</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			goToNext() {
				// 跳转到下一个页面的逻辑
				uni.navigateTo({
					url: '/pages/Identitychose/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ml-21 {
	  margin-left: 21rpx;
	}
	.page {
	  background-color: #ffffff;
	  background-image: linear-gradient(180deg, #e4f0fe 0%, #ffffff 59.49%, #ffffff 100%);
	  width: 100%;
	  height: 100vh;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  .image-wrapper {
	    padding: 79.78rpx 0 67.22rpx;
	    filter: drop-shadow(0rpx 10rpx 15rpx #94b9e366);
	    background-color: #ffffff;
	    border-radius: 50%;
	    background-image: url('https://ide.code.fun/api/image?token=6930ce0d9520a30011f760e3&name=17434277476381635470.png');
	    background-position: 50% 50%;
	    background-size: 50% 50%;
	    background-repeat: no-repeat;
	    width: 220rpx;
	    .image {
	      width: 31rpx;
	      height: 73rpx;
	    }
	  }
	  .pos {
	    position: absolute;
	    left: 50%;
	    top: 260rpx;
	    transform: translateX(-50%);
	  }
	  .text {
	    color: #181f32;
	    font-size: 44rpx;
	    font-family: 'PingFang SC';
	    font-weight: 500;
	    line-height: 62rpx;
		text-align: center;
		margin: 60rpx 0;
	    width: 396rpx;
	  }
	  .pos_2 {
	    position: absolute;
	    left: 50%;
		text-align: center;
	    top: 551rpx;
	    transform: translateX(-50%);
	  }
	  .section_2 {
	    padding: 30rpx 32rpx;
	    background-color: #eff3f7;
	    border-radius: 50rpx;
	    width: 590rpx;
	    .image_2 {
	      border-radius: 8rpx;
	      width: 32rpx;
	      height: 32rpx;
	    }
	    .text_2 {
	      color: #181f32;
	      font-weight: 500;
	    }
	  }
	  .pos_3 {
	    position: absolute;
	    left: 50%;
	    top: 684rpx;
	    transform: translateX(-50%);
	  }
	  .section_3 {
	    padding: 29rpx 33rpx;
	    background-color: #eff3f7;
	    border-radius: 50rpx;
	    width: 590rpx;
	    .image_3 {
	      width: 30rpx;
	      height: 32rpx;
	    }
	    .text_4 {
	      color: #aab1bb;
	    }
	    .group {
	      margin-right: 6.7rpx;
	      height: 42rpx;
	      .text_5 {
	        color: #aab1bb;
	      }
	      .text_6 {
	        color: #aab1bb;
	        font-size: 22rpx;
	        font-family: 'PingFang SC';
	        font-weight: 500;
	        line-height: 30rpx;
	      }
	    }
	  }
	  .pos_5 {
	    position: absolute;
	    left: 50%;
	    top: 814rpx;
	    transform: translateX(-50%);
	  }
	  .font {
	    font-size: 28rpx;
	    font-family: 'PingFang SC';
	    line-height: 40rpx;
	  }
	  .text-wrapper {
	    padding: 12rpx 0;
	    background-color: #000000cc;
	    border-radius: 32rpx;
	    width: 220rpx;
	    .text_3 {
	      color: #ffffff;
	    }
	  }
	  .pos_4 {
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    transform: translate(-50%, -50%);
	  }
	  .image_4 {
	    width: 28rpx;
	    height: 28rpx;
		margin-right: 10rpx;
	  }
	  .pos_7 {
	    position: absolute;
	    left: 0rpx;
	    bottom: 0rpx;
	  }
	  .group_2 {
	    line-height: 36rpx;
	    text-align: left;
	    width: 650rpx;
		position: relative;
		display: flex;
		margin-top: 300rpx;
		margin-bottom: 40rpx;
		justify-content: center;
		align-items:center;
		flex-wrap: wrap;
	    .font_3 {
	      font-size: 24rpx;
	      font-family: 'PingFang SC';
	      line-height: 36rpx;
	      color: #727a86;
	    }
	    .font_4 {
	      font-size: 24rpx;
	      font-family: 'PingFang SC';
	      line-height: 36rpx;
	      color: #1e60ff;
	    }
	  }
	  .text-wrapper_22 {
	    padding: 29rpx 0;
	    background-color: #1e60ff;
	    border-radius: 50rpx;
	    width: 650rpx;
	    .text_7 {
	      color: #ffffff;
	    }
	  }
	  .pos_8 {
	    position: absolute;
	    left: 50%;
	    top: 1154rpx;
	    transform: translateX(-50%);
	  }
	  .font_2 {
	    font-size: 30rpx;
	    font-family: 'PingFang SC';
	    line-height: 42rpx;
	    font-weight: 500;
	  }
	}
</style>
