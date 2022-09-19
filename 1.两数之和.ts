/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-21 14:42:00
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-21 15:23:04
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  let arr = new Array();
  nums.map((value, index) => {
    map.set(value, index);
  });
  for (let j = 0; j < nums.length - 1; j++) {
    if (map.has(target - nums[j]) && map.get(target - nums[j]) != j) {
      arr.push(j, map.get(target - nums[j]));
      return arr;
    }
  }
}
// @lc code=end
