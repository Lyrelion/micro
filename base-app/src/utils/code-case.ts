/*
 * @Description: 加密解密通用方法
 * @Author: Lyrelion
 * @Date: 2022-03-22 13:41:05
 * @LastEditTime: 2023-02-23 09:58:28
 */

import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

/**
 * AES加密
 * @param word 要加密的字符串
 * @param key 秘钥
 */
function aesEncryption(pWord: string, pKey: string): string {
  const word = CryptoJS.enc.Utf8.parse(pWord);
  const key = CryptoJS.enc.Utf8.parse(pKey);
  const iv = CryptoJS.enc.Utf8.parse('solutionsolution');
  const encrypted = CryptoJS.AES.encrypt(word, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}

/**
 * AES解密
 * @param word 要解密的字符串
 * @param key 秘钥
 */
function aesDecrypt(word: string, pKey: string): string {
  const key = CryptoJS.enc.Utf8.parse(pKey);
  const iv = CryptoJS.enc.Utf8.parse('solutionsolution');
  const decrypted = CryptoJS.AES.decrypt(word, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

/**
 * JWT解密
 * @param word JWT字符串
 */
function jwtDecode(word: string): null | { [key: string]: unknown } | string {
  return jwt.decode(word);
}

export default {
  aesEncryption,
  aesDecrypt,
  jwtDecode,
};
