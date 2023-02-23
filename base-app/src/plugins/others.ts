/*
 * @Description: 全局注册其他插件
 * @Author: Lyrelion
 * @Date: 2022-03-22 13:41:05
 * @LastEditTime: 2023-02-23 14:03:22
 */

import { Buffer } from 'buffer';
import 'dayjs/locale/zh-cn';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).global = window;
global.Buffer = global.Buffer || Buffer;
