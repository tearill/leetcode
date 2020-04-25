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
  let arr = []
  while(l1) {
    arr.push(l1.val)
    l1 = l1.next
  }
  while(l2) {
    arr.push(l2.val)
    l2 = l2.next
  }
  arr = arr.sort((a, b) => a-b)
  let head = new ListNode(-1)
  let prev = head
  arr.map((item, index) => {
    arr[index] = new ListNode(item)
    // arr[index].next = arr[index + 1]
    prev.next = arr[index]
    prev = prev.next
  })
  return head.next
}

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
console.log(mergeTwoLists(n1, n2))