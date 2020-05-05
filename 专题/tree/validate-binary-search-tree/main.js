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
  let prev = null
  const help = (node) => {
    // 排除不符合的情况
    if(node === null) return true
    if(!help(node.left)) return false
    if(prev !== null && prev >= node.val) return false // 如果前一个节点大于下一节点
    prev = node.val // 保存前一个节点的值
    return help(node.right)
  }
  return help(root)
}

console.log(isValidBST(a1))
console.log(isValidBST(p1))
