/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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
function recursion(
  root: TreeNode | null,
  left: TreeNode | null,
  right: TreeNode | null
): boolean {
  if (!root) return true;
  if (!left && !right) return true;
  if (left?.val !== right?.val) return false;
  return (
    recursion(left, left.left, right.right) &&
    recursion(right, right.left, left.right)
  );
}
function isSymmetric(root: TreeNode | null): boolean {
  return recursion(root, root.left, root.right);
}
// @lc code=end
