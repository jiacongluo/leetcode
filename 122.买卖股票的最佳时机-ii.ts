/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-14 17:12:29
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-14 17:29:32
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let profit = 0,
    // *买入时机
    left = 0,
    // *卖出时机
    right;
  for (right = 1; right < prices.length; right++) {
    if (prices[left] >= prices[right]) {
      left++;
    } else {
      profit = profit + prices[right] - prices[left];
      left = right;
    }
  }
  return profit;
}
// @lc code=end
