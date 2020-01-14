type ListNode struct {
	Val int
	Next *ListNode
}
func reverseList(head *ListNode) *ListNode {
	var pre *ListNode
	for head != nil {
		temp := head.Next //后继结点
		head.Next = pre // 指向前驱结点
		pre = head // 前驱结点设置为当前结点
		head = temp // 当前结点变成原下一个结点
	}
	return pre
}