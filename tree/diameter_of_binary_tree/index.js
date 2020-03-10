function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

var a1 = new TreeNode(1)
var a2 = new TreeNode(2)
var a3 = new TreeNode(3)
a1.left = a2
a1.right = a3

var a4 = new TreeNode(4)
var a5 = new TreeNode(5)
a2.left = a4
a2.right = a5

/**
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = function(root) {
  let max = 1
  function maxDepth(root) {
    if(!root) return 0
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    max = Math.max(max, left + right)
    return Math.max(left, right) + 1
  }
  maxDepth(root)
  return max
}

console.log(diameterOfBinaryTree(a1))