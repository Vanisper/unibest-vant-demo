import type { Rule } from '@form-create/vant'
import type { StepData } from '../config'
import { showNotify } from 'vant'
import { handleReset as handleBaseReset, handleSubmit as handleBaseSubmit } from '../config'

/**
 * 多步表单组合式函数
 */
export function useStepsForm(initSteps: StepData[]) {
  const currentStep = ref<number>(0)
  const stepsData = initSteps.slice()

  /** 下一步 */
  async function nextStep(validator: (currentStep: StepData, currIndex: number) => Promise<boolean>): Promise<void> {
    const isValid = await validator(stepsData[currentStep.value], currentStep.value)
    if (!isValid)
      return

    if (currentStep.value < stepsData.length - 1) {
      currentStep.value++
      showNotify({
        message: '进入下一步',
        type: 'success',
        position: 'top',
        duration: 1000,
      })
    }
  }

  // 上一步
  const prevStep = (): void => {
    if (currentStep.value > 0) {
      // 切换到上一步
      currentStep.value--
      showNotify({
        message: '返回上一步',
        type: 'primary',
        position: 'top',
        duration: 1000,
      })
    }
  }

  // 注册 rules
  function registerRules(step: number, rules: Rule[]) {
    stepsData[step].rules = ref(rules).value as unknown as Rule[]
  }

  // 注册 data
  function registerData(step: number) {
    stepsData[step].data = ref({}).value as unknown as Record<string, any>
  }

  // 注册 api
  function registerApi(step: number) {
    stepsData[step].api = ref(null).value
  }

  // 注册 setps
  function registerSteps(step: number, rules: Rule[]) {
    registerRules(step, rules)
    registerData(step)
    registerApi(step)
  }

  /**
   * 重置当前步骤的表单
   */
  function handleReset() {
    const currentStepData = stepsData[currentStep.value]
    if (currentStepData.api) {
      handleBaseReset(currentStepData.api)
    }
  }

  /**
   * 遍历所有步骤的表单
   */
  function handleSubmit() {
    stepsData.forEach((step) => {
      if (step.api) {
        handleBaseSubmit(step.api)
      }
    })
  }

  // 获取所有步骤的表单数据
  const getAllFormData = () => {
    return stepsData.map(step => step.data).reduce((acc, curr) => {
      return { ...acc, ...curr }
    }, {})
  }

  // 格式化显示数据
  const formatDisplayData = () => {
    const allData = getAllFormData()
    return JSON.stringify(allData, null, 2)
  }

  return {
    // 状态
    currentStep: readonly(currentStep),
    stepsData,

    // 方法
    nextStep,
    prevStep,
    registerSteps,
    handleReset,
    handleSubmit,
    formatDisplayData,
  }
}
