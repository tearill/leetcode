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
console.log(n1);

var oddEvenList = function(head) {
    // 奇偶结点分开放在两个数组
    // 奇链表的尾结点指向偶链表的头结点
    // 空间复杂度不是O(1) 不是原地
    if(!head || !head.next) { // 空链表或只有一个结点
        return head;
    }
    var odd = []; // 存放奇数结点
    var even = []; // 存放偶数结点
    var f = true; // 奇偶标记变量
    while(head) {
        var next = head.next;
        head.next = null; // 将原来的链关系断掉
        if(f) { // 第一次刚进来，或者true
            odd.push(head); // 奇数结点数组，每个节点的next指针都被干掉了
        }else {
            even.push(head);
        }
        f = !f; // 一奇一偶
        head = next;
    }
    // 重建两个分链表的顺序 
    for (let i = 0; i < odd.length-1; i++) {
        odd[i].next = odd[i+1];
    }
    for (let i = 0; i < even.length-1; i++) {
        even[i].next = even[i+1];
    }
    // 将奇链表的尾结点指向偶链表的头结点
    odd[odd.length-1].next = even[0];
    return odd[0];
}

console.log(oddEvenList(n1));