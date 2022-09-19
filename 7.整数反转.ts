/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-21 15:42:38
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-21 16:35:08
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  let result = 0;
  const MAX_VALUE = Math.pow(2, 31) - 1;
  const MIN_VALUE = MAX_VALUE * -1;
  while (Math.abs(x) > 0) {
    result = result * 10 + (x % 10);
    if (result > MAX_VALUE || result < MIN_VALUE) return 0;
    x = ~~(x / 10);
  }
  return result;
}
// @lc code=end
