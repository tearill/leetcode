function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

//   3
//  / \
// 9  20
//   /  \
//  15   7

const root = new TreeNode(3)
const n1 = new TreeNode(9)
const n2 = new TreeNode(20)
root.left = n1
root.right = n2

const n3 = new TreeNode(15)
const n4 = new TreeNode(7)
n2.left = n3
n2.right = n4

// console.log(root)

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (inorder.length === 0) return null // inorder 不能再划分了
  const root = new TreeNode(preorder[0]) // 前序遍历的第一个节点一定是二叉树的根节点
  let index = inorder.indexOf(preorder[0]) // 找到根节点在中序遍历数组中位置
  // 通过中序保证左右子树的元素，前序中的元素一个一个累加上去
  // 左子树的元素在中序中的位置为 root 左边的
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
  // 右子树的元素在中序中的位置为 root 右边的
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
  return root
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))
