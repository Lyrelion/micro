/*
 * @Description: 插件入口文件
 * @Author: Lyrelion
 * @Date: 2022-03-22 13:41:05
 * @LastEditTime: 2023-02-23 14:11:39
 */

import { App } from 'vue';
// 引入 ElementPlus 插件
import installElementPlus from './element-plus';
// 引入 ThsDesign 插件
import installThsDesign from './ths-design';
// 引入 其他 插件
import './others';

export default {
  install: (app: App): void => {
    installElementPlus(app);
    installThsDesign(app);
  },
};
