function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(7);
const n2 = new ListNode(2);
const n3 = new ListNode(4);
const n4 = new ListNode(3);
l1.next = n2;
n2.next = n3;
n3.next = n4;

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
var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];
  // 把每一位数字放进栈中，取出来的时候就是逆序的
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let mark = 0;
  let res = null; // 存储结果
  // 通过 pop 逆序取数字
  while (stack1.length > 0 || stack2.length > 0 || mark !== 0) {
    let val1 = stack1.length > 0 ? stack1.pop() : 0; // 取一位数字
    let val2 = stack2.length > 0 ? stack2.pop() : 0;
    let val = val1 + val2 + mark;
    mark = val / 10 | 0; // 计算处理进位
    curNode = new ListNode(val % 10); // 创建节点
    curNode.next = res;
    res = curNode;
  }
  return res;
};

console.log(addTwoNumbers(l1, l2));
// 输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 8 -> 0 -> 7