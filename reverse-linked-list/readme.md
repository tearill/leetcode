# 反转链表  
- leetcode👉https://leetcode-cn.com/problems/reverse-linked-list/  

## 通过前驱结点和后继结点的概念，使用遍历  
  当前结点的next 指向它的前驱结点  
  之前的前驱结点变成当前节点  
  当前结点变成原结点的后继结点  
  如果为null，完成遍历  

## 递归  
  - 把复杂类似的变成简单的重复  
  - 退出条件  
    null  
  简单公式 n个结点要反转 1个结点  
  当前结点cur next指针指向的结点的next 指向当前结点的话，就反转了  
  结点的next 属性干掉  