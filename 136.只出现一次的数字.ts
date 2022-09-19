/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-16 16:33:39
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-16 16:36:35
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let reduce = 0;
  // *让每一个数组元素与0异或，最后的结果就为只出现一次的数字
  for (let num of nums) {
    reduce = reduce ^ num;
  }
  return reduce;
}
// @lc code=end
