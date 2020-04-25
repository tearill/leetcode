function ListNode(val) {
  this.val = val;
  this.next = null;
}

const n1 = new ListNode(1)
const l1 = new ListNode(2)
const l2 = new ListNode(4)
n1.next = l1
l1.next = l2

const n2 = new ListNode(1)
const l3 = new ListNode(3)
const l4 = new ListNode(4)
n2.next = l3
l3.next = l4

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // console.log(l1, l2)
  if (!l1) return l2
  if (!l2) return l1
  let head = new ListNode(-1)
  let prev = head
  while(l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = !l1 ? l2 : l1
  return head.next
}

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
console.log(mergeTwoLists(n1, n2))