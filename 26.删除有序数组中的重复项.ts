/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-14 16:53:33
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-14 17:14:22
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  //边界条件判断
  if (nums == null || nums.length == 0) return 0;
  let left = 0;
  let right = left + 1;
  while (right < nums.length) {
    if (nums[left] == nums[right]) {
      right++;
    } else {
      nums[++left] = nums[right++];
    }
  }
  return ++left;
}
// @lc code=end
