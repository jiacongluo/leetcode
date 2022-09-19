/*
 * @Author: BlackSpiderX
 * @Description: Debug.js
 * @Date: 2021-07-22 14:51:59
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-22 16:04:48
 * @LastEditors: BlackSpiderX
 */
function Debug(s) {
  if (s.length === 0) return "";
  // *先取第一个字符串当做他们的公共前缀
  let pre = s[0];
  let i = 1;
  // *遍历后面所有元素
  while (i < s.length) {
    // *不断截取，直至找到公共前缀，找不到退出循环时pre为空
    while (s[i].indexOf(pre) != 0) {
      pre = pre.substring(0, pre.length - 1)
    }
    i++;
  }
  return pre;
}
let result = Debug(["c", "acc", "ccc"]);
console.log(result);