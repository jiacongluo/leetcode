/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-21 16:40:53
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-21 16:55:43
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
}
// @lc code=end
