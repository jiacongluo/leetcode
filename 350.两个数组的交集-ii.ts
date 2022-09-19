/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-16 16:58:24
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-16 17:27:36
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  if (nums1.length === 0 || nums2.length === 0) {
    return [];
  }
  let myMap = new Map();
  let result = [];
  for (let item of nums1) {
    let value = myMap.get(item);
    myMap.set(item, myMap.get(item) ? ++value : 1);
  }
  for (let item of nums2) {
    if (myMap.get(item) > 0) {
      result.push(item);
      let value = myMap.get(item) - 1;
      myMap.set(item, value);
    }
  }
  return result;
}
// @lc code=end
