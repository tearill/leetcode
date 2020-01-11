function ListNode(val) {
    this.val = val;
    this.next = null;
    // return this;
}

var partition = function(head, x) {
    var smaller = dummySmaller = new ListNode(-1); // 小区
    var greater = dummyGreater = new ListNode(-1); // 大区 dummyGreater用于保存greater中的第一个结点(-1)
    while(head) {
        console.log(head.val);
        // 链表的遍历
        // head 是动态的 代表每次循环时候的当前结点
        if(head.val < x) {
            smaller.next = head; // 进入较小值分区
            smaller = smaller.next; // 更新smaller
        }else{
            greater.next = head;
            greater = greater.next;
        }
        head = head.next;
    }
    // 把两个分区合并起来
    // greater 已经是大区里的最大值 大区中的最后一个值
    smaller.next = dummyGreater.next;
    greater.next = null; // 最后一个结点的next属性为空 
    return dummySmaller.next; // 返回了分隔后的头结点
}

const n1 = new ListNode(1);
const n2 = new ListNode(4);
const n3 = new ListNode(3);
const n4 = new ListNode(2);
const n5 = new ListNode(5);
const n6 = new ListNode(2);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
console.log(n1);
console.log(partition(n1, 3));