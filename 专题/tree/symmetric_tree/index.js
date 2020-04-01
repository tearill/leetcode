function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

var a1 = new TreeNode(1)
var a2 = new TreeNode(2)
var a3 = new TreeNode(2)
a1.left = a2
a1.right = a3

var a4 = new TreeNode(3)
var a5 = new TreeNode(4)
a2.left = a4
a2.right = a5

var a6 = new TreeNode(4)
var a7 = new TreeNode(3)
a3.left = a6
a3.right = a7

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const isMirror = function(node1, node2) {
    if(node1 === null && node2 === null) return true
    if(node1 === null || node2 === null) return false
    if(node1.val !== node2.val) return false
    return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
  }
  return isMirror(root, root)
}

console.log(isSymmetric(a1))