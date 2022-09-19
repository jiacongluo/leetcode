/*
 * @Author: BlackSpiderX
 * @Description:
 * @Date: 2021-07-23 12:24:13
 * @Email: BlackSpiderX@163.com
 * @LastEditTime: 2021-07-23 12:27:17
 * @LastEditors: BlackSpiderX
 */
/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  let str = '';
  while (head !== null) {
    str += head.val;
    head = head.next;
  }
  return str === str.split('').reverse().join('') ? true : false;
}
// @lc code=end
