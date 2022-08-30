import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Axios from 'axios'

//----------------element-plus/icons-vue-------------------
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//-----------------axios------------------------
const instance = Axios.create({
  baseURL: 'http://localhost:1338/users/',
  timeout: 5000
})

instance.interceptors.request.use(config => {
  return config
});

instance.interceptors.response.use(res => { 
  return res.data;
});

app.config.globalProperties.$axios = instance
//------------------------挂载其它模块---------------------

app.use(store).use(router).use(ElementPlus).mount('#app')
