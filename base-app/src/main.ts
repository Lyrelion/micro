/*
 * @Description: 入口文件
 * @Author: Lyrelion
 * @Date: 2022-03-22 13:41:05
 * @LastEditTime: 2023-02-23 14:06:17
 */

import { createApp } from 'vue'

// 引入所需插件
import plugins from './plugins';

// CSS reset的替代方案
import 'normalize.css';
// 引入全局样式
import './assets/styles/style.scss';

// 根文件
import App from './App.vue'

const app = createApp(App)

app.use(plugins)
app.mount('#app')
