<script lang="ts" setup>
import FormCreate from '@form-create/vant'
import { useStepsForm } from '../composables/useStepsForm'
import {
  step1Rules,
  step2Rules,
  stepsFormOptions,
  stepsInitData,
} from '../config'

const {
  currentStep,
  stepsData,
  nextStep: nextStepFn,
  prevStep,
  registerSteps,
  handleReset,
  handleSubmit,
  formatDisplayData,
} = useStepsForm(stepsInitData) // 初始化 steps 数据

const formOptions = stepsFormOptions

// 注册对应的上面的某些步骤的 form-create 规则
// 这里的步骤索引与 stepsData 的索引对应
registerSteps(0, step1Rules)
registerSteps(1, step2Rules)

/**
 * 进入下一个步骤
 * @description 验证当前步骤表单数据是否有效，若有效则进入下一步
 */
async function nextStep() {
  await nextStepFn(async (currentStep, index) => {
    return new Promise((resolve) => {
      currentStep.api?.validate().then(() => {
        resolve(true)
      }).catch((_err: Array<{ message: string, name: string }>) => {
        resolve(false)
      })
    })
  })
}
</script>

<template>
  <view class="steps-form">
    <!-- 步骤指示器 -->
    <view class="steps-header">
      <van-steps :active="currentStep" direction="horizontal">
        <van-step v-for="(step, index) in stepsData" :key="index">
          {{ step.text }}
        </van-step>
      </van-steps>
    </view>

    <!-- 表单内容区域 -->
    <view class="form-content">
      <!-- 第一步：基本信息 -->
      <view v-show="currentStep === 0" class="step-form">
        <view class="step-title">
          {{ stepsData[0].text }}
        </view>
        <form-create
          v-model="stepsData[0].data"
          v-model:api="stepsData[0].api"
          :rule="stepsData[0].rules"
          :option="formOptions"
        />
      </view>

      <!-- 第二步：详细信息 -->
      <view v-show="currentStep === 1" class="step-form">
        <view class="step-title">
          {{ stepsData[1].text }}
        </view>
        <form-create
          v-model="stepsData[1].data"
          v-model:api="stepsData[1].api"
          :rule="stepsData[1].rules"
          :option="formOptions"
        />
      </view>

      <!-- 第三步：确认提交 -->
      <view v-show="currentStep === 2" class="step-form">
        <view class="step-title">
          {{ stepsData[2].text }}
        </view>
        <view class="confirm-content">
          <view class="data-preview">
            <view class="preview-title">
              请确认您填写的信息：
            </view>
            <view class="data-display">
              <pre class="data-json">{{ formatDisplayData() }}</pre>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 操作按钮 -->
    <view class="form-actions">
      <view class="action-buttons">
        <van-button
          v-if="currentStep > 0"
          type="default"
          size="large"
          class="action-btn"
          @click="prevStep"
        >
          上一步
        </van-button>

        <van-button
          v-if="currentStep < stepsData.length - 1"
          type="primary"
          size="large"
          class="action-btn"
          @click="nextStep"
        >
          下一步
        </van-button>

        <van-button
          v-if="currentStep === stepsData.length - 1"
          type="primary"
          size="large"
          class="action-btn"
          @click="handleSubmit"
        >
          提交表单
        </van-button>
      </view>

      <van-button
        v-if="currentStep !== stepsData.length - 1"
        type="warning"
        size="large"
        plain
        class="reset-btn"
        @click="handleReset"
      >
        重置当前步骤表单
      </van-button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.steps-form {
  padding: 24rpx;
  background: #f7f8fa;
  min-height: 100%;
  box-sizing: border-box;
}

.steps-header {
  background: white;
  padding: 32rpx;
  margin-bottom: 24rpx;
  border-radius: 16rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.1);
}

.form-content {
  background: white;
  border-radius: 16rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.1);
  margin-bottom: 24rpx;
  overflow: hidden;

  .step-title {
    font-size: 36rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 32rpx;
    text-align: center;
  }

  .step-form {
    padding: 32rpx;
    min-height: 500rpx;
  }
}

.confirm-content {
  .preview-title {
    font-size: 32rpx;
    font-weight: 500;
    color: #333;
    margin-bottom: 24rpx;
  }
}

.data-display {
  background: #f5f5f5;
  border-radius: 12rpx;
  padding: 24rpx;
  border: 2rpx solid #e4e7ed;
}

.data-json {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 24rpx;
  line-height: 1.5;
  color: #333;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.form-actions {
  background: white;
  padding: 32rpx;
  border-radius: 16rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.1);

  .action-buttons {
    display: flex;
    gap: 24rpx;
    margin-bottom: 24rpx;

    .action-btn {
      flex: 1;
      height: 88rpx;
      border-radius: 44rpx;
    }
  }

  .reset-btn {
    width: 100%;
    height: 88rpx;
    border-radius: 44rpx;
  }
}
</style>
