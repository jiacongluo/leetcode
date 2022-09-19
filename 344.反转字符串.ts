/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-21 15:31:35
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-21 15:37:15
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    let char = s[left];
    s[left++] = s[right];
    s[right--] = char;
  }
  return;
}
// @lc code=end
