/*
 * @Description: 入口文件
 * @Author: Lyrelion
 * @Date: 2022-03-22 13:41:05
 * @LastEditTime: 2023-02-23 10:16:04
 */

import { createApp } from 'vue'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// CSS reset的替代方案
import 'normalize.css';
// 引入全局样式
import './assets/styles/style.scss';

// 根文件
import App from './App.vue'

const app = createApp(App)

// 注册全局图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.mount('#app')
