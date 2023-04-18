import '@/styles/index.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from '@/App.vue'
import { loadSvg } from '@/icons'
import { loadPlugins } from '@/plugins'
import router from '@/router'

const app = createApp(App)

/** 加载插件 */
loadPlugins(app)
/** 加载全局 SVG */
loadSvg(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
