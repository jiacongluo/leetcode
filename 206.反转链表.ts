/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-22 16:58:36
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-10-17 09:21:01
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
  // *原链表指针
  let p = head;
  // *暂存原链表节点
  let t = null;
  // *新链表指针
  let q = null;
  while (p != null) {
    // *暂存原链表的节点
    t = p;
    // *原链表当前指针后一一位
    p = p.next;
    // *将暂存节点接入新链表
    t.next = q;
    // *新链表q指针前移
    q = t;
  }
  return q;
}
// @lc code=end
