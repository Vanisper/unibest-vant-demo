import type { App } from 'vue'
import formCreate from '@form-create/vant'
import install from '@form-create/vant/auto-import'

/**
 * 初始化 form-create 插件
 * @param app Vue 应用实例
 * @description 依赖 Vant 组件库
 * @returns
 */
export function setupFormCreate(app: App) {
  // 暂时无法自动按需注册，需要 install 注册所需组件
  formCreate.use(install)
  app.use(formCreate)
  return app
}
