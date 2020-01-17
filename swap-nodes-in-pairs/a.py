class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        _next = head.next
        _next.next = head
        head.next = self.swapPairs(_next.next)
        return _next

