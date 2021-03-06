function ListNode(val) {
  this.val = val
  this.next = null
}

const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
const n4 = new ListNode(4)
const n5 = new ListNode(5)
// const n6 = new ListNode(6)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
// n5.next = n6

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var middleNode = function(head) {
//   if (!head) return null
//   if (!head.next) return head
//   let arr = []
//   while(head.next) {
//     arr.push(head.val)
//     head = head.next
//   }
//   return arr[arr.length / 2]
// };

var middleNode = function(head) {
  if (!head) return null
  if (!head.next) return head
  let arr = [],
      newHead = head,
      len = 0
  while(newHead){
      arr[len++] = newHead
      newHead = newHead.next
  }
  return arr[len >> 1]
}

console.log(middleNode(n1))