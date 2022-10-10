/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let pre = 0,
    maxAns = nums[0];
  for (let num of nums) {
    pre = Math.max(pre + num, num);
    maxAns = Math.max(maxAns, pre);
  }
  return maxAns;
}
// @lc code=end
