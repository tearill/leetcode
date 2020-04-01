function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

var a1 = new TreeNode(3)
var a2 = new TreeNode(9)
var a3 = new TreeNode(20)
a1.left = a2
a1.right = a3

var a4 = new TreeNode(15)
var a5 = new TreeNode(7)
a3.left = a4
a3.right = a5

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function(root) {
  if(!root) return true
  function maxDepth(root) {
    if(root === null) return 0
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1
  }
  return Math.abs(maxDepth(root.left) - maxDepth(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
};

console.log(isBalanced(a1))