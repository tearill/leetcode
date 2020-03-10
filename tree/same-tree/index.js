function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

//   1        1
// 2   3    2   3

// var p = new TreeNode(1)
// var p1 = new TreeNode(2)
// var p2 = new TreeNode(3)
// p.left = p1
// p.right = p2

// var q = new TreeNode(1)
// var q1 = new TreeNode(2)
// var q2 = new TreeNode(3)
// q.left = q1
// q.right = q2

var p = new TreeNode(1)
var p1 = new TreeNode(2)
p.left = p1

var q = new TreeNode(1)
var q1 = new TreeNode(2)
q.right = q1

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {
  if(!p && !q) return true
  if(!p || !q) return false
  if(p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

console.log(isSameTree(p, q))