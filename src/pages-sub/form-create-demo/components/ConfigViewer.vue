<script lang="ts" setup>
import { formatJson } from '../utils'

interface Props {
  rules: any
}

defineProps<Props>()
</script>

<template>
  <view class="config-container">
    <view class="config-title">
      当前表单规则配置
    </view>
    <view class="config-desc">
      以下是当前表单的 JSON 配置，展示了 FormCreate 的规则结构
    </view>
    <view class="json-display">
      <pre class="json-content">{{ formatJson(rules) }}</pre>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.config-container {
  padding: 32rpx;

  .config-title {
    font-size: 32rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 16rpx;
  }

  .config-desc {
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
</style>
