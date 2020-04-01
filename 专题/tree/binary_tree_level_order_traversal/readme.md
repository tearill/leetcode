# 二叉树的层次遍历  
leetcode👉https://leetcode-cn.com/problems/binary-tree-level-order-traversal/  

给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。  

[3,9,20,null,null,15,7]  
   | |  
   \\/  
[
  [3],
  [9,20],
  [15,7]
]

## DFS 深度优先  

- 目标：返回一个按层次遍历的数组  
  结点自身只能有三个操作：  
  1. 取当前结点的值  
  2. 拿到左树的引用  
  3. 拿到右树的引用  
  所以要引入一个 helpFunction  

- helpFunction:  
  需要把当前层次的结点记录成为一个一维数组，并放入到总数组之中  
  记录当前的层数与总层数比较，来向下进级  

