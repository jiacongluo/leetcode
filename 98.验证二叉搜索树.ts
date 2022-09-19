/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-27 16:55:12
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-09-17 07:29:26
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  return isValidBST2(root, null, null);
}
function isValidBST2(
  root: TreeNode | null,
  min: TreeNode | null,
  max: TreeNode | null
): boolean {
  if (root == null) {
    return true;
  }
  if (min != null && root.val < min.val) {
    return false;
  }
  if (max != null && root.val > max.val) {
    return false;
  }
  return (
    isValidBST2(root.left, min, root) && isValidBST2(root.right, root, max)
  );
}
// @lc code=end
