/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let maxProfit = 0,
    minPrice = Number.MAX_VALUE;
  for (let price of prices) {
    maxProfit = Math.max(price - minPrice, maxProfit);
    minPrice = Math.min(price, minPrice);
  }
  return maxProfit;
}
// @lc code=end
