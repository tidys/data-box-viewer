import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@xuyanfeng/cc-ui/dist/ccui.css'
import '@xuyanfeng/cc-ui/iconfont/iconfont.css'
import '@xuyanfeng/cc-ui/iconfont/use.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
