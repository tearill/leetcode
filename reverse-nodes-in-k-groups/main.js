function ListNode(val) {
  this.val = val;
  this.next = null;
}
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
// console.log(n1);

var reverseKGroup = function (head, k) {
  if (!head || k === 1) return head; // 空链表 k为1
  let cur = head, prev = null
  let p = head

  // 查找满足翻转条件的链表区间的头节点
  for (let i = 0; i < k; i++) { 
    if (p === null) return head
    p = p.next
  }
  
  // 对满足条件的 k 个链表节点进行翻转
  for (let j = 0; j < k; j++) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  // 翻转之后 head.next 应该成为当前翻转好的链表的最后一个节点，它是下一次翻转的开始位置
  // 此时 prev 是最后一个元素，cur 为下一个翻转范围内头节点(第一个链表元素)
  head.next = reverseKGroup(cur, k)
  return prev
}

console.log(reverseKGroup(n1, 2));