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

var isValidBST = function(root) {
  if(root === null) return true // 树为空，直接返回 true
  let stack = [root]
  let min = Number.MIN_SAFE_INTEGER
  let max = Number.MAX_SAFE_INTEGER
  root.max = max
  root.min = min
  while(stack.length) {
    let node = stack.pop()
    if(node.val <= node.min || node.val >= node.max) return false // 越界了
    if(node.left) {
      stack.push(node.left)
      // 更新上下界
      node.left.max = node.val
      node.left.min = node.min
    }
    if(node.right) {
      stack.push(node.right)
      // 更新上下界
      node.right.max = node.max
      node.right.min = node.val
    }
  }
  return true
}

console.log(isValidBST(a1))
console.log(isValidBST(p1))