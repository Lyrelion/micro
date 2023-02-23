/*
 * @Description: 注册 ElementPlus 组件，按需引入图标
 * @Author: Lyrelion
 * @Date: 2022-03-22 13:41:05
 * @LastEditTime: 2023-02-23 14:05:52
 */

import { App } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn';

// 引入 ElementPlus 图标
import {
  Loading,
  ArrowDown,
  ArrowRight,
  Fold,
  ArrowLeft,
  MoreFilled,
  Close,
  CloseBold,
  Edit,
} from '@element-plus/icons-vue';

export default (app: App): void => {
  /* 注册图标组件 */
  app.component('Loading', Loading);
  app.component('ArrowDown', ArrowDown);
  app.component('ArrowRight', ArrowRight);
  app.component('Fold', Fold);
  app.component('ArrowLeft', ArrowLeft);
  app.component('MoreFilled', MoreFilled);
  app.component('Close', Close);
  app.component('CloseBold', CloseBold);
  app.component('Edit', Edit);

  /* 使用插件 */
  app.use(ElementPlus, { locale });
};
