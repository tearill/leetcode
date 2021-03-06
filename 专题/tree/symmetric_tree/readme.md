# 对称二叉树  
leetcode👉https://leetcode-cn.com/problems/symmetric-tree/  

给定一个二叉树，检查它是否是镜像对称的。  

## 递归实现  
- 条件：  
  根结点出发，值相同，并且每个结点的左右子树也必须是对称二叉树  

- 和相同的树解题思路一致  
  排除掉不相等的部分，其他就是相等的部分  
  每次取到的结点都要判断左右是否对称  

- 注意的点：  
  `return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)`  
  要去判断两边，所以辅助函数的参数是两个，只用一个结点的话只能判断到一侧结点是否对称  

## 迭代实现  
- 思路：  
  利用栈的数据结构  
  先把根结点放两次进去(目的是为了能同时取到对称位置的结点进行值的比较)  
  进入循环先用两个变量把栈中的两个结点取出来比较：  
    1. 不满足相等条件，直接退出循环返回 false  
    2. 如果满足相等条件就继续执行，把两个结点的左结点和右节点入栈，方便下一次循环比较(一个左一个右保证对称)  
  关键代码:  
  ```js
  stack.push(n1.left, n2.right)
  stack.push(n1.right, n2.left)
  ```