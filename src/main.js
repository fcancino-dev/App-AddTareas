import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ELementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(ELementPlus)
app.mount('#app')
