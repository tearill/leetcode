# 两两交换链表中的节点
- leetcode👉https://leetcode-cn.com/problems/swap-nodes-in-pairs/

- 两两交换相邻的节点
  记录两个中的第一个节点和第二个节点
  交换两个节点的指向，并和前驱节点和后继节点链接起来

- 使用递归
  - 第一个节点的next是第三、第四个节点交换的结果，第二个节点的next是第一个节点；
  - 第三个节点的next是第五、第六个节点交换的结果，第四个节点的next是第三个节点；
    以此类推
    next = head.next;
    next.next = head;
    head.next = swapPairs(next.next);
    
