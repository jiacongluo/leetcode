/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-22 16:28:03
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-22 16:44:36
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head;
  let slow = head;
  // *fast移n步
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  // *如果fast为空，表示删除的是头结点
  if (fast == null) return head.next;
  // *slow和fast同时移动
  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }
  // *这里最终slow不是倒数第n个节点，他是倒数第n+1个节点，
  // *他的下一个结点是倒数第n个节点,所以删除的是他的下一个结点
  slow.next = slow.next.next;
  return head;
}
// @lc code=end
