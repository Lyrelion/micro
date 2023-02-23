/*
 * @Description: 编码转中文
 * @Author: Lyrelion
 * @Date: 2022-03-22 13:41:05
 * @LastEditTime: 2023-02-23 10:06:52
 */

/**
 * 编码转中文，字典项为数组时使用
 * @param code 编码
 * @param dictionary [{ code: '1', name: '男'... }]
 * @param codeKey 编码在 dictionary 对应的 codeKey
 * @param nameKey 编码在 dictionary 对应的 nameKey
 */
export function formatFromArrayDictionary(code: string, dictionary: Array<Record<string, string|null|number>>,
  codeKey: string, nameKey: string):string|null|number|undefined {
  let name;
  dictionary.forEach((thisDic) => {
    if (thisDic[codeKey] === code) {
      name = thisDic[nameKey];
    }
  });
  return name;
}

/**
 * 编码转中文，字典项为对象时使用
 * @param code 编码
 * @param dictionary { code: name, ... }
 */
export function formatFromObjectDictionary(code: string, dictionary: Record<string, string|null|number>): string|null|number {
  if (typeof dictionary === 'object' && dictionary[code]) {
    return dictionary[code];
  }
  return null;
}

export default {
  formatFromArrayDictionary,
  formatFromObjectDictionary,
};
