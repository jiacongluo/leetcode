/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-16 16:16:00
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-16 16:26:55
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  if (nums.length === 0 || nums === null) {
    return false;
  }
  let mySet = new Set(nums);
  if (mySet.size === nums.length) {
    return false;
  } else {
    return true;
  }
}
// @lc code=end
