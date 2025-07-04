import type { Rule } from '@form-create/vant'

// 表单数据类型定义
export interface FormData {
  name?: string
  age?: number
  gender?: string
  hobbies?: string[]
  city?: string
  notifications?: boolean
  birthday?: string
  reminderTime?: string
  satisfaction?: number
  priceRange?: number
  region?: string | string[]
  description?: string
}

// 标签页类型
export interface TabItem {
  title: string
  key: string
}

// 表单配置类型
export interface FormConfig {
  rules: Rule[]
  options: {
    form: {
      labelWidth: string
      labelPosition: string
    }
  }
}
