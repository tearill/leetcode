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
  return helper(preorder, 0, preorder.length, inorder, 0, inorder.length)
}

function helper(preorder, p_start, p_end, inorder, i_start, i_end) {
  if (p_start === p_end) return null // preorder 为空
  let rootVal = preorder[p_start] // 根节点的值
  let root = new TreeNode(rootVal) // 根节点
  let index = inorder.indexOf(rootVal) // 根节点在 inorder 中的位置
  let leftNum = index - i_start // 左子树的节点数
  root.left = helper(preorder, p_start + 1, p_start + leftNum + 1, inorder, i_start, index)
  root.right = helper(preorder, p_start + leftNum + 1, p_end, inorder, index + 1, i_end)
  return root
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))
