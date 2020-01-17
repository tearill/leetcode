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
    var dummy = { // 哨兵结点
        next: head
    }
    // reverse
    var start = dummy; // 初始化时为dummy，动态改变，之后会变成每个小组的前驱结点(上一个小组的结束结点)
    var end = head; // 初始化时 这个小组的第一个结点
    var count = 0; // 计数
    while (end != null) {
        count++;
        if (count % k == 0) { // 整除 要翻转 得到小组
            // 更新start 一次翻转后 start应该是这次翻转的尾结点
            start = reverse(start, end.next); // 为了得到end.next 保证翻转之后的小组尾结点指向end.next
            end = start.next; // 每个小组的第一个结点
        } else {
            end = end.next; // 更新end的值
        }
    }
    return dummy.next;
}
// start, end是要reverse的
// 一次翻转
var reverse = function (start, end) {
    var curr = start.next; // 头结点 dummy 1开始
    var prev = start; // 前驱结点
    var first = curr; // 保存第一个结点 成为尾结点 下一组的前驱结点
    while (curr != end) { // end 3  当前小组的 [1, 2]
        var next = curr.next; // 下一个结点
        curr.next = prev; // reverse
        prev = curr; // 当前结点变成下一次的前驱结点
        curr = next; // 当前结点后移，成为下一个结点
    }
    // curr 变成了传进来的end
    // prev 变成小组里的头结点
    start.next = prev;
    first.next = curr; // 原来的头结点变成了小组尾结点 指向下一个分组的开始
    // 小组之间链起来。上一次的尾结点指向下各小组的开始结点
    return first;
}

console.log(reverseKGroup(n1, 2));