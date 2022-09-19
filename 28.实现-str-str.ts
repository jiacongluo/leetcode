/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-22 14:51:25
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-22 15:20:23
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (needle === '') return 0;
  let length1 = haystack.length;
  let length2 = needle.length;
  if (length1 < length2) return -1;
  let point1 = 0,
    point2 = 0,
    result = 0;
  for (; point1 < length1; ) {
    if (haystack[point1] === needle[point2]) {
      // *指针2重新开始从左往右
      if (point2 === 0) {
        // *此时指针1为haystack开始的位置
        result = point1;
      }
      // *相等则两个指针都往右移一位
      point1++;
      point2++;
      // *当指针2下标等于needle的长度时，则返回结果
      if (point2 === length2) {
        return result;
      }
    } else {
      // *指针2重新开始从左往右
      point2 = 0;
      // *重新调整point1位置
      point1 = result + 1;
      // *haystack起始位置往前移
      result++;
    }
  }
  return -1;
}
// @lc code=end
