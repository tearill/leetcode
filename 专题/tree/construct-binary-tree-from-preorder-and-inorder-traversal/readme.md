# 从前序与中序遍历序列构造二叉树  
leetcode👉https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/  

根据一棵树的前序遍历与中序遍历构造二叉树  
```js
例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
```

- 已知前序遍历和中序遍历，恢复二叉树  
  前序遍历的第一个一定是根节点  
  拿到根节点之后去到中序遍历中找到元素的位置  
  该元素前面的是根节点左子树部分，后面的是根节点右子树部分  
  在前序遍历中拿出左子树的部分，第一个元素是左子树的根节点  
  前序遍历中去除左子树部分后第一个节点是右子树的根节点  
  递归这个过程  

- 递归  
  ```js
  // 通过中序保证左右子树的元素，前序中的元素一个一个累加上去  
  // 左子树的元素在中序中的位置为 root 左边的  
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
  // 右子树的元素在中序中的位置为 root 右边的
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
  ```

- 优化  
  slice 消耗性能  
  不使用 slice，改为使用双指针来标记在前序和中序中的位置  
  helper 函数  

- 哈希表优化  
  每次递归都要在 inorder 数组中寻找根节点的位置，耗费性能  
  提前把 inorder 数组的项和索引存储在 HashMap 中  
  ```js
  let map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
  ```
  交给 helper 函数的参数中携带 map  
