import { createApp, VueElement } from 'vue'
import App from './App.vue'

// 全局组件
import components from './components.js'

const app = createApp(App)
app.use(components)
app.mount('#app')
