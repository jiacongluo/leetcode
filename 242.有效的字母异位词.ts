/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-21 17:10:31
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-21 17:17:09
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      let addOne = map.get(s[i]) + 1;
      map.set(s[i], addOne);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (map.get(t[i]) > 0) {
      let reduceOne = map.get(t[i]) - 1;
      map.set(t[i], reduceOne);
    } else {
      return false;
    }
  }
  return true;
}
// @lc code=end
