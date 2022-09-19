/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-22 16:19:14
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-22 16:25:47
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=237 lang=typescript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root: ListNode | null): void {
  root.val = root.next.val;
  root.next = root.next.next;
}
// @lc code=end
