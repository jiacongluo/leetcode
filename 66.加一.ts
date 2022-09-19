/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-16 18:49:08
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-16 19:05:32
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  for (let j = digits.length - 1; j >= 0; j--) {
    // *不等于9的加一返回结果
    if (digits[j] !== 9) {
      digits[j]++;
      return digits;
    } else {
      // *等于9的置为0
      digits[j] = 0;
      // *如果该元素还是下标为0，则头部推入元素1，并返回结果
      if (j === 0) {
        digits.unshift(1);
        return digits;
      }
    }
  }
}
// @lc code=end
