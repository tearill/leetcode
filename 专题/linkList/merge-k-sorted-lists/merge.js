function ListNode(val) {
  this.val = val
  this.next = null
}
const n1 = new ListNode(1)
const l2 = new ListNode(4)
const l3 = new ListNode(5)
n1.next = l2
l2.next = l3

const n2 = new ListNode(1)
const l4 = new ListNode(3)
const l5 = new ListNode(4)
n2.next = l4
l4.next = l5

const n3 = new ListNode(2)
const l6 = new ListNode(6)
n3.next = l6

var mergeKLists = function(lists) {
  let len = lists.length
  if (len === 0) return null
  if (len === 1) return lists[0]
  
  const mergeTwoLists = (l1, l2) => {
    let head = new ListNode(-1)
    let cur = head
    while(l1 && l2) {
      if (l1.val < l2.val) {
        cur.next = l1
        l1 = l1.next
      } else {
        cur.next = l2
        l2 = l2.next
      }
      cur = cur.next
    }
    cur.next = l1 ? l1 : l2
    return head.next
  }

  const merge = (left, right) => {
    if (left === right) return lists[left] // 退出条件
    let mid = (left + right) >> 1 // 从中部开始对半拆分
    let l1 = merge(left, mid)
    let l2 = merge(mid + 1, right)
    return mergeTwoLists(l1, l2)
  }

  return merge(0, len - 1)
};

console.log(mergeKLists([n2, n2, n3]))
console.log(mergeKLists([[]]))
console.log(mergeKLists([]))