/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-23 11:06:05
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-23 11:38:47
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 == null && l2 == null) return null;
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  let dummy = new ListNode(0);
  let p = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }
  p.next = l1 == null ? l2 : l1;
  return dummy.next;
}
// @lc code=end
