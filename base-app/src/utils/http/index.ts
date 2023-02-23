/*
 * @Description: axios 封装
 * @Author: Lyrelion
 * @Date: 2022-03-22 13:41:05
 * @LastEditTime: 2023-02-23 09:58:08
 */

import axios from 'axios';
// 本地存储
import storage from '@/utils/storage';

const http = axios.create({
  /*
   * baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
   * withCredentials: true, // 如跨域请求时要带上 cookie，则设置为 true
   */
  timeout: 1000 * 5, // 请求超时时长：5秒
});

http.interceptors.request.use(
  (config: any) => {
    // 给请求头增加 userToken
    const token = storage.getString('token') || 'tokenTest';
    // token 为真，并且不是 检查 token 是否过期 的接口地址时
    if (token && config && config.url && !config.url.includes('auth/sign')) {
      // 给符合要求的请求，添加 token 请求头
      config.headers = {
        userToken: token,
        ...config.headers,
      };
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => {
    // 如果返回的状态不是 200 就报错 按需修改
    if (response.status && response.status !== 200) {
      return Promise.reject(new Error('utils/http/index.ts 接口请求发生错误！'));
    }
    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

export default http;
