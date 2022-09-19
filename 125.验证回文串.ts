/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-22 10:30:41
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-22 11:21:45
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  // *将所有非数字或者字母去除，剩下的字符串为数字或字母组成的字符串
  s = s.replace(/[^A-Za-z0-9]/g, '').toLocaleLowerCase();
  // *比较反转字符串是否相等
  return s.split('').reverse().join('') === s;
}
// @lc code=end
