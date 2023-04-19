import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import ElementPlus from 'element-plus'
import type { App } from 'vue'

export function loadElementPlus(app: App) {
  /** Element Plus 组件完整引入 */
  app.use(ElementPlus, {
    size: 'small',
    zIndex: 3000
  })
}
