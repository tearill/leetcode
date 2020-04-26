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


/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let arr = []
  let len = lists.length
  for (let i = 0; i < len; i++) { // 放入数组
    let list = lists[i]
    while(list) {
      arr.push(list.val)
      list = list.next
    }
  }
  arr.sort((a, b) => a - b) // 排序
  // console.log(arr, '---')
  let head = new ListNode(-1)
  let prev = head
  arr.map((node) => {
    prev.next = new ListNode(node)
    prev = prev.next
  })
  return head.next
};

console.log(mergeKLists([n2, n2, n3]))
console.log(mergeKLists([[]]))
console.log(mergeKLists([]))

// 输入:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 输出: 1->1->2->3->4->4->5->6