<route lang="json5" type="page">
{
  style: {
    navigationStyle: 'default',
    navigationBarTitleText: 'FormCreate 完整示例',
  },
}
</route>

<script lang="ts" setup>
import type { Api } from '@form-create/vant'
import type { FormData } from './types'
import FormCreate from '@form-create/vant'
import ConfigViewer from './components/ConfigViewer.vue'
import DataViewer from './components/DataViewer.vue'
import DemoHeader from './components/DemoHeader.vue'
import { defaultFormRules, formOptions } from './config'

const activeTab = ref<number>(0)
const formRules = ref(defaultFormRules)
const formData = ref<FormData>({})
const formApi = ref<Api | null>(null)
</script>

<template>
  <view class="form-create-demo">
    <DemoHeader />
    <van-tabs v-model:active="activeTab" class="demo-tabs">
      <!-- 表单展示 -->
      <van-tab title="表单展示" class="tab-content">
        <view class="form-container">
          <form-create
            v-model="formData"
            v-model:api="formApi"
            :rule="formRules"
            :option="formOptions"
          />
        </view>
      </van-tab>

      <!-- 配置查看 -->
      <van-tab title="配置查看" class="tab-content">
        <ConfigViewer :rules="formRules" />
      </van-tab>

      <!-- 数据查看 -->
      <van-tab title="数据查看" class="tab-content">
        <DataViewer :form-data="formData" />
      </van-tab>
    </van-tabs>
  </view>
</template>

<style lang="scss" scoped>
.form-create-demo {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.demo-tabs {
  .tab-content {
    padding: 0;
  }
}

.form-container {
  padding: 32rpx;
  background: white;
  margin: 16rpx;
  border-radius: 16rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.1);
}

.form-actions {
  margin-top: 48rpx;
  display: flex;
  flex-direction: column;
  gap: 24rpx;

  .action-btn {
    height: 88rpx;
    border-radius: 44rpx;
  }
}

// 覆盖 form-create 样式
:deep(.fc-form) {
  .van-cell {
    padding: 24rpx 0;

    .van-cell__title {
      font-weight: 500;
      color: #333;
    }
  }

  .van-field__label {
    font-weight: 500;
    color: #333;
    margin-bottom: 12rpx;
  }
}

// 覆盖 van-tabs 样式
:deep(.van-tabs) {
  .van-tabs__nav {
    background: white;
    box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
  }

  .van-tab {
    font-weight: 500;
  }

  .van-tabs__content {
    padding: 0;
  }
}
</style>
