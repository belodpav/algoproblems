/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var memory = 0,
      b = 0,
      root,
      node = null;
  node = new ListNode(0);
  root = node;
  while(l1 || l2) {
    b = memory;
    if (l1) {
      b += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      b += l2.val;
      l2 = l2.next;
    }
    node.val = b % 10;
    memory = Math.floor(b / 10);
    if (l1 || l2) {
      node.next = new ListNode(0);
      node = node.next;
    }
  }
  if (memory) {
    node.next = new ListNode(memory);
  } 
  return root;
};