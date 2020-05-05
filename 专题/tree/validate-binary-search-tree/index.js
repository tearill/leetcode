function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

var a1 = new TreeNode(2)
var a2 = new TreeNode(1)
var a3 = new TreeNode(3)
a1.left = a2
a1.right = a3

var p1 = new TreeNode(5)
var p2 = new TreeNode(1)
var p3 = new TreeNode(4)
p1.left = p2
p1.right = p3

var p4 = new TreeNode(1)
var p5 = new TreeNode(6)
p3.left = p4
p3.right = p5

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function(root) {
  let inorderList = []
  // 中序遍历
  const inorderTraversal = function(root) {
    let stack = [],
        cur = root
    while(stack.length > 0 || cur != null) {
      if(cur != null) {
        stack.push(cur)
        cur = cur.left
      } else {
        cur = stack.pop()
        inorderList.push(cur.val)
        cur = cur.right
      }
    }
  }
  inorderTraversal(root)
  // 判断是否是单调递增数组
  for (let i = 0; i < inorderList.length; i++) {
    if(inorderList[i] >= inorderList[i+1]) return false
  }
  return true
}

console.log(isValidBST(a1))
console.log(isValidBST(p1))
