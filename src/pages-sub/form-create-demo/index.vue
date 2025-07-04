<route lang="json5" type="page">
{
  style: {
    navigationStyle: 'default',
    navigationBarTitleText: 'FormCreate',
  },
}
</route>

<script lang="ts" setup>
import formCreate from '@form-create/vant'
import { showNotify } from 'vant'

const formData = ref({})
const formApi = ref(null)

const formRules = ref([
  {
    type: 'input',
    field: 'username',
    title: '用户名',
    value: '',
  },
  {
    type: 'input',
    field: 'password',
    props: {
      type: 'password',
    },
    title: '密码',
    value: '',
  },
])

function demoHandle() {
  showNotify({
    message: '测试\nvan 组件示例',
    position: 'top',
    type: 'warning',
    duration: 800,
  })
}
</script>

<template>
  <view class="flex flex-col gap-2 px-8 py-4">
    <h1 class="text-center">
      FormCreate demo
    </h1>
    <van-button round type="primary" plain size="small" block @click="demoHandle">
      van 组件按需示例
    </van-button>
  </view>
  <view>
    <form-create v-model="formData" v-model:api="formApi" :rule="formRules" />
  </view>
</template>
