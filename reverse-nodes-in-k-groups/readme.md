# K 个一组翻转链表
- leetcode👉https://leetcode-cn.com/problems/reverse-nodes-in-k-group/

- 多个子任务，每个子任务都是一个原来的翻转链表
- 这些子任务之间，如何链起来
- 如何划分这些子任务

- 总结：
  reverse(start, end) [1, 2, 3, 4, 5]   k = 3时候 应该传 dummy 和 4 进去
  传进去的应该是每个需要翻转的链表小组的前驱节点和后继节点
  是为了保证每个小组能够继续在整个链表中链接上
  翻转完成要将小组链接回去
  小组前驱节点 start 指向小组的最后一个节点 curr， 小组的第一个节点 prev 指向小组的后继节点 end
  start要变成小组的最后一个节点