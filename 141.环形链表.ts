/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-26 11:43:23
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-26 11:47:14
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false;
  // *快慢指针
  let fast = head;
  let slow = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
// @lc code=end
