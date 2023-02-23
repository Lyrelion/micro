import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  // vite 项目配置路径别名（参考地址：https://blog.csdn.net/weixin_52020362/article/details/126668036）
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [vue()],
})
