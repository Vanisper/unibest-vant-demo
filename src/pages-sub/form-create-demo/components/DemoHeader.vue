<script setup lang="ts">
import { showNotify } from 'vant'

function demoHandle(): void {
  showNotify({
    message: '这是一个完整的 FormCreate 示例\n包含多种组件类型展示',
    position: 'top',
    type: 'primary',
    duration: 2000,
  })
}

function demoStepsHandle(): void {
  uni.navigateTo({
    url: '/pages-sub/form-create-demo/steps-form',
  })
}
</script>

<template>
  <view class="demo-header">
    <view class="title">
      FormCreate 完整示例
    </view>

    <view class="subtitle">
      基于 Vant 组件库的表单构建器
    </view>

    <view class="flex flex-col gap-2">
      <van-button type="primary" round plain size="small" class="demo-btn" @click="demoHandle">
        查看示例说明
      </van-button>
      <van-button type="danger" round plain size="small" @click="demoStepsHandle">
        查看步骤表单
      </van-button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.demo-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 24rpx 32rpx 32rpx;
  text-align: center;

  .title {
    font-size: 36rpx;
    font-weight: bold;
    margin-bottom: 8rpx;
  }

  .subtitle {
    font-size: 28rpx;
    opacity: 0.9;
    margin-bottom: 24rpx;
  }

  .demo-btn {
    margin-top: 16rpx;
    padding: 0 36rpx;
  }
}
</style>
