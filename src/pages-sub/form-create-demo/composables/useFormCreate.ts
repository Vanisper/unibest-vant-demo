import type { Api } from '@form-create/vant'
import type { FormData } from '../types'
import { showNotify, showSuccessToast } from 'vant'

/**
 * FormCreate 表单逻辑组合式函数
 */
export function useFormCreate() {
  const formData = ref<FormData>({})
  const formApi = ref<Api | null>(null)

  // 表单提交
  const handleSubmit = async (): Promise<void> => {
    if (!formApi.value) {
      console.warn('FormCreate API 未初始化')
      return
    }

    try {
      await formApi.value.validate()
      showSuccessToast('表单验证通过！')
      console.log('表单数据：', formData.value)
    }
    catch (errors) {
      console.warn('表单验证失败：', errors)
      showNotify({
        message: '表单验证失败，请检查输入',
        type: 'danger',
        position: 'top',
      })
    }
  }

  // 重置表单
  const handleReset = () => {
    if (!formApi.value) {
      console.warn('FormCreate API 未初始化')
      return
    }
    formApi.value.resetFields()

    showNotify({
      message: '表单已重置',
      type: 'success',
      position: 'top',
    })
  }

  return {
    formData,
    formApi,
    handleSubmit,
    handleReset,
  }
}
