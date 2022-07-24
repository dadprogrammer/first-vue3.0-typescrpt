import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
// 引入Element-plus
import ElementPlus from 'element-plus'
import '@/assets/icon/iconfont.css';
import '@/extensions/axios';
import { createPinia } from 'pinia'
const pinia = createPinia()
// 渲染进程配置代码 size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000
createApp(App).use(router).use(pinia).use(ElementPlus,{size: 'small', zIndex: 3000})
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
