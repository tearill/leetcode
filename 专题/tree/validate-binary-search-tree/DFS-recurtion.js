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
  const help = (node, max, min) => {
    if(node === null) return true // 树为空，直接返回 true
    if(node.val >= max || node.val <= min) return false // 越界(左孩子比上界大，右孩子比下界小)
    // 更新左孩子的上界，更新右孩子的下界
    return help(node.left, node.val, min) && help(node.right, max, node.val)
  }
  return help(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
}

console.log(isValidBST(a1))
console.log(isValidBST(p1))