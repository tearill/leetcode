function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var a1 = new TreeNode(4)
var a2 = new TreeNode(2)
var a3 = new TreeNode(7)
a1.left = a2
a1.right = a3

var a4 = new TreeNode(1)
var a5 = new TreeNode(3)
a2.left = a4
a2.right = a5

var a6 = new TreeNode(6)
var a7 = new TreeNode(9)
a3.left = a6
a3.right = a7

// const root = [a1, a2, a3, a4, a5, a6, a7]

// 交换当前节点的左右节点，再递归的交换当前节点的左节点，递归的交换当前节点的右节点 null返回
var mirrorTree = function(root) {
  if(!root) return null
  // 交换左右子树结点
  let temp = root.left
  root.left = root.right
  root.right = temp
  // 重复对左右子树做一样的操作，并重置root
  root.left = mirrorTree(root.left)
  root.right = mirrorTree(root.right)

  return root
};

// console.log(mirrorTree(root))