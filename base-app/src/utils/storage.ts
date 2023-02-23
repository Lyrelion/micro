/*
 * @Description: storage 本地持久化存储相关方法
 * @Author: Lyrelion
 * @Date: 2022-03-22 13:41:05
 * @LastEditTime: 2023-02-23 10:16:04
 */

import jwt from 'jsonwebtoken';
// 数据类型接口
import { DecodedDataInf } from '@/types/base';

// 加密数据格式
// export interface DecodedDataInf {
//   [n: string]: string;
// }

/**
 * 加密数据（同时放入 session、放入浏览器的信息）
 * @param word 要加密的 JSON 对象
 */
function saveJsonEncode(key: string, word: JSON): void {
  const encodeData = jwt.sign(
    {
      data: word,
    },
    'solution',
  );
  localStorage.setItem(key, encodeData);
}

/**
 * 获取浏览器中的信息，并解密
 * @param key 浏览器中存在的 KEY
 */
function getJsonDecode(key: string): DecodedDataInf {
  let decodedData: DecodedDataInf = {};
  try {
    const data: string = localStorage.getItem(key) || '';
    const jwtData = jwt.verify(data, 'solution') as { data: DecodedDataInf };
    decodedData = jwtData.data;
  } catch (err) {
    console.log('storage.ts --- 获取浏览器中的信息，并解密 --- JSON 数据被篡改');
  }
  return decodedData;
}

/**
 * 加密数据（同时放入 session、放入浏览器的信息）
 * @param word 要加密的 String 对象
 */
function saveStringEncode(key: string, word: string): void {
  const encodeData = jwt.sign(
    {
      data: word,
    },
    'solution',
  );
  localStorage.setItem(key, encodeData);
}

/**
 * 获取浏览器中的信息，并解密
 * @param key 浏览器中存在的 KEY
 */
function getStringDecode(key: string): string {
  let decodedData = '';
  try {
    const data: string = localStorage.getItem(key) || '';
    const jwtData = jwt.verify(data, 'solution') as { data: string };
    decodedData = jwtData.data;
  } catch (err) {
    console.log('storage.ts --- 获取浏览器中的信息，并解密 --- String 数据被篡改');
  }
  return decodedData;
}

/**
 * 放入浏览器中的信息（原样，不加密）
 * @param word JSON 对象
 */
function saveJson(key: string, word: JSON): void {
  localStorage.setItem(key, JSON.stringify(word));
}

/**
 * 获取浏览器中的信息（转成 JSON 对象）
 * @param key 浏览器中存在的 KEY
 */
function getJson(key: string): JSON {
  const data = localStorage.getItem(key) || '{}';
  const decodedData = JSON.parse(data);
  return decodedData;
}

/**
 * 放入浏览器中的信息（原样）
 * @param word String 对象
 */
function saveString(key: string, word: string): void {
  localStorage.setItem(key, word);
}

/**
 * 获取浏览器中的信息（原样）
 * @param key 浏览器中存在的 KEY
 */
function getString(key: string): string | null {
  const decodedData = localStorage.getItem(key);
  return decodedData;
}

/**
 * 清除浏览器中存储的信息
 * @param key 浏览器中存在的 KEY
 */
function remove(key: string): void {
  localStorage.removeItem(key);
}

/**
 * 清除浏览器中存储的所有信息
 */
function clear(): void {
  localStorage.clear();
}

export default {
  saveJsonEncode,
  getJsonDecode,
  saveStringEncode,
  getStringDecode,
  saveJson,
  getJson,
  saveString,
  getString,
  remove,
  clear,
};
