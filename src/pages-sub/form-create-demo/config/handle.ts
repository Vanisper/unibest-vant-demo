import type { Api } from '@form-create/vant'
import { showNotify, showSuccessToast } from 'vant'

// 表单提交
export async function handleSubmit(fApi: Api): Promise<void> {
  if (!fApi) {
    console.warn('FormCreate API 未初始化')
    return
  }

  try {
    await fApi.validate()
    showSuccessToast('表单验证通过！')
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
export function handleReset(fApi: Api) {
  if (!fApi) {
    console.warn('FormCreate API 未初始化')
    return
  }
  fApi.resetFields()

  showNotify({
    message: '表单已重置',
    type: 'success',
    position: 'top',
  })
}
