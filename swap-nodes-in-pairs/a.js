function ListNode(val) {
    this.val = val;
    this.next = null;
}
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
n1.next = n2;
n2.next = n3;
n3.next = n4;

var swapPairs = function (head) {
    if (!head || !head.next) return head; // 空链表或链表只有一个节点
    const dummy = {
        next: head
    }
    let curr = dummy;
    while (curr.next != null && curr.next.next != null) {
        let first = curr.next; // 两个中的第一个节点
        let second = curr.next.next; // 两个中的第二个节点
        first.next = second.next; // 第一个节点变成第二个节点 next 指向原来第二个节点的next(与后面的节点链接)
        second.next = first; // 第二个节点 next 指向原来第一个节点
        curr.next = second; // 把第二个节点变成第一个节点 并和头结点链接
        curr = curr.next.next; // curr后移
    }
    return dummy.next;
}
console.log(swapPairs(n1));