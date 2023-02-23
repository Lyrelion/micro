/*
 * @Description: 公共方法
 * @Author: Lyrelion
 * @Date: 2022-03-22 13:41:05
 * @LastEditTime: 2023-02-23 10:02:24
 */

/**
 * 十六进制颜色转换 rgb
 * @param color  十六进制颜色
 */
export function colorRgb(color: string): string {
  let sColor = color.toLowerCase();
  // 十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      // eslint-disable-next-line radix
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
    }
    return sColorChange.join(',');
  }
  return sColor;
}

/**
 * 获取地址栏参数 hash 不能使用
 * @param {string} param - 需要获取的参数字段名
 * @returns {string|param}
 */
export function getParameter(param: string): string {
  const query = window.location.search;
  const iLen = param.length;
  let iStart = query.indexOf(param);
  if (iStart === -1) return '';
  // eslint-disable-next-line no-const-assign
  iStart += iLen + 1;
  const iEnd = query.indexOf('&', iStart);
  if (iEnd === -1) return query.substring(iStart);

  return query.substring(iStart, iEnd);
}

/**
 * 获取第一条数据里最子级的数据
 * @param data - 第一条数据
 * @param name - 子级的 key 名
 */
export function getChildData(data: any[], name: any) {
  let childData: any;
  if (data[name] && data[name].length > 0) {
    childData = getChildData(data[name][0], name);
  } else {
    childData = data;
  }
  return childData;
}
