/*
 * @Description: cookie 相关
 * @Author: Lyrelion
 * @Date: 2022-03-22 13:41:05
 * @LastEditTime: 2023-02-23 10:03:56
 */

import Cookies from 'js-cookie';

/**
 * 常量 cookie 存储时用到的 key
 */
export const CookieKeys = {
  // 语言类型
  LANGUAGE_KEY: 'language',
};

/**
 * 获取语言类型
 */
export const getLanguage = () => Cookies.get(CookieKeys.LANGUAGE_KEY);

/**
 * 设置语言类型
 * @param language
 */
export const setLanguage = (language: string) => Cookies.set(CookieKeys.LANGUAGE_KEY, language);
