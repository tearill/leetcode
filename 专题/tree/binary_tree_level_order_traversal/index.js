function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// [3,9,20,null,null,15,7]
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
 * @return {number[][]}
 */

// DFS 深度优先法
var levelOrder = function (root) {
  let result = [] // 结果数组
  if (!root) return result // 树为空时直接返回
  function walk(node, level) { // 辅助函数遍历每一层的结点
    if (result.length === level) {
      result.push([]) // 初始化定型每一层的数组
    }
    result[level].push(node.val) // 每一层都是一个数组
    node.left && walk(node.left, level + 1) // 访问左结点下一层
    node.right && walk(node.right, level + 1) // 访问右节点下一层
  }
  walk(root, 0)
  return result
}

console.log(levelOrder(a1))