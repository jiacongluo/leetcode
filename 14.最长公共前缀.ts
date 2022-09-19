/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-22 15:29:37
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-22 16:04:36
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';
  // *先取第一个字符串当做他们的公共前缀
  let pre = strs[0];
  let i = 1;
  // *遍历后面所有元素
  while (i < strs.length) {
    // *没找到不断截取，直至找到公共前缀，退出循环时pre为公共前缀
    while (strs[i].indexOf(pre) != 0) {
      pre = pre.substring(0, pre.length - 1);
    }
    i++;
  }
  return pre;
}
// @lc code=end
