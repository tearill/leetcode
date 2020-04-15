function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(2);
const n2 = new ListNode(4);
const n3 = new ListNode(3);
l1.next = n2;
n2.next = n3;

const l2 = new ListNode(5);
const p2 = new ListNode(6);
const p3 = new ListNode(4);
l2.next = p2;
p2.next = p3;

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//   let node = new ListNode(0);
//   let carry = 0;
//   let dummy = node;
//   let sum = 0;
//   while(l1 || l2) {
//     let val1 = l1 ? l1.val : 0;
//     let val2 = l2 ? l2.val : 0;
//     sum = val1 + val2 + carry;
//     dummy.next = new ListNode(sum % 10);
//     dummy = dummy.next;
//     carry = parseInt(sum / 10);
//     l1 = l1.next;
//     l2 = l2.next;
//   }
//   if (carry > 0) dummy.next = new ListNode(carry);
//   return node.next;
// };

var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let res = new ListNode(0);
  let dummy = res;
  while(l1 || l2 || carry !== 0) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + carry;
    carry = sum / 10 | 0;
    dummy.next = new ListNode(sum % 10);
    // curNode.next = res;
    dummy = dummy.next;
    // res = curNode;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return res.next;
};

console.log(addTwoNumbers(l1, l2));
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807  