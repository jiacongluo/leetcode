/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-16 19:10:58
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-16 19:26:28
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let count = 0;
  let cursor = 0;
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[cursor] === 0) {
      nums.splice(cursor, 1);
      count++;
    } else {
      cursor++;
    }
  }
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
}
// @lc code=end
