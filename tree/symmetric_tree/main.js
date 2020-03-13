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
  let stack = [root, root]
  while(stack.length) {
    let n1 = stack.pop()
    let n2 = stack.pop()
    // console.log(n1.val, n2.val)
    if(n1 === null && n2 === null) continue
    if(n1 === null || n2 === null) return false
    if(n1.val !== n2.val) return false
    stack.push(n1.left, n2.right)
    stack.push(n1.right, n2.left)
  }
  return true
}

 console.log(isSymmetric(a1))