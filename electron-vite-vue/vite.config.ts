import { rmSync } from 'fs'
import {join, resolve} from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import pkg from './package.json'
// Element Plus 按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
rmSync('dist', { recursive: true, force: true }) // v14.14.0
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      main: {
        entry: 'electron/main/index.ts',
        vite: {
          build: {
            outDir: 'dist/electron/main',
            assetsDir: '',         // 这个要格外小心，使用默认的 assets 会导致在 Electron 打包后基于 file:// 加载文件失败

          },
        },
      },
      preload: {
        input: {
          // You can configure multiple preload here
          index: join(__dirname, 'electron/preload/index.ts'),
        },
        vite: {
          build: {
            // For debug
            sourcemap: 'inline',
            outDir: 'dist/electron/preload',
          },
        },
      },
      // Enables use of Node.js API in the Renderer-process
      renderer: {},
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      }
    ]
  },
  server: {
    cors: true, // 默认启用并允许任何源
    https: false, // 是否开启 https
    open: false, // 是否自动在浏览器打开
    port: pkg.env.VITE_DEV_SERVER_PORT, // 端口号
    host: pkg.env.VITE_DEV_SERVER_HOST,//这个是vite本地启动的服务地址
    proxy: {
      '/v1': {
        target: "http://10.168.1.2:5000", // 后台接口
        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        // ws: true, //websocket支持
        rewrite: (path) => path.replace(/^\/v1/, ""),
      },
    },
  }
})
