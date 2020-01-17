function ListNode(val) {
    this.val = val;
    this.next = null;
}
const n1 = new ListNode(1)
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
n1.next = n2;
n2.next = n3;
n3.next = n4;

var swapPairs = function (head) {
    if (!head || !head.next) return head; // 空链表或者只有一个节点
    let next = head.next; // 变成交换后新的head
    head.next = swapPairs(next.next); // head 成为新的第二个节点 next 指向下一组交换完的第一个结点
    next.next = head; // 把原来第二个节点 next 指向第一个节点 -> 变成第一个节点
    return next;
}
console.log(swapPairs(n1));