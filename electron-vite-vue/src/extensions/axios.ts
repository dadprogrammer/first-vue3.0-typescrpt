import { createApp } from 'vue'
import { loadEnv } from 'vite';
// process.env = {...process.env, ...loadEnv(mode, process.cwd())};
const app = createApp({})
import axios from '@/plugins/axios'
// 附加$axios对象
app.config.globalProperties.axios = axios;
//  有没有可能vite环境下 不能使用node.js的process
if (process.env.NODE_ENV !== 'production') {
  app.use(axios, '/v1')
} else {
  let ipAddress = window.localStorage.getItem('newIpAddress')
  let newPort = window.localStorage.getItem('newPort')
  if (!ipAddress) {
    window.localStorage.setItem('newIpAddress', '10.168.1.2')
  }
  if (!newPort) {
    window.localStorage.setItem('newPort', '5000')
  }
  let httpURI = 'http://' + ipAddress + ':' + newPort
  app.use(axios, httpURI)
}

