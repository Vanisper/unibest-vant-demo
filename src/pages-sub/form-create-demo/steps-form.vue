<route lang="json5" type="page">
{
  style: {
    navigationStyle: 'default',
    navigationBarTitleText: '步骤表单示例',
  },
}
</route>

<script lang="ts" setup>
import StepsForm from './components/StepsForm.vue'
</script>

<template>
  <view style="height: calc(100vh - var(--window-top));">
    <StepsForm />
  </view>
</template>
