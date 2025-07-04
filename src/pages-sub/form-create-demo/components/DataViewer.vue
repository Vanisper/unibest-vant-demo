<script lang="ts" setup>
import type { FormData } from '../types'
import { formatJson } from '../utils'

interface Props {
  formData: FormData
}

const props = defineProps<Props>()

// 计算字段数量
const fieldCount = computed(() => Object.keys(props.formData).length)

// 计算已填写字段数量
const filledFieldCount = computed(() => {
  return Object.values(props.formData).filter(
    v => v !== '' && v !== null && v !== undefined,
  ).length
})
</script>

<template>
  <view class="data-container">
    <view class="data-title">
      当前表单数据
    </view>
    <view class="data-desc">
      实时显示表单的数据变化，所有字段值都会在这里同步更新
    </view>
    <view class="json-display">
      <pre class="json-content">{{ formatJson(formData) }}</pre>
    </view>

    <!-- 数据统计 -->
    <view class="data-stats">
      <van-cell title="表单字段数量" :value="`${fieldCount} 个`" />
      <van-cell title="已填写字段" :value="`${filledFieldCount} 个`" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.data-container {
  padding: 32rpx;

  .data-title {
    font-size: 32rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 16rpx;
  }

  .data-desc {
    font-size: 28rpx;
    color: #666;
    margin-bottom: 24rpx;
    line-height: 1.6;
  }
}

.json-display {
  background: #f5f5f5;
  border-radius: 12rpx;
  padding: 24rpx;
  margin-bottom: 24rpx;
  border: 2rpx solid #e4e7ed;

  .json-content {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 24rpx;
    line-height: 1.5;
    color: #333;
    margin: 0;
    white-space: pre-wrap;
    word-break: break-all;
  }
}

.data-stats {
  background: white;
  border-radius: 12rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
}
</style>
