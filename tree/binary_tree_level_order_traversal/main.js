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

 // 迭代 + 队列
var levelOrder = function(root) {
  let result = [] // 存放遍历结果
  if (root === null) return result
  let queue = [root] // 队列存放每层的结点
  let level = 0 // 当前层次
  while(queue.length) {
    result[level] = [] // 每层的遍历结果
    let nodeNum = queue.length // 每层的结点数量
    // console.log(nodeNum)
    for(let i = 0; i < nodeNum.length; i++) {
      let node = queue.shift()
      result[level].push(node.val)
      node.left && queue.push(node.left)
      // if(node.right) queue.push(node.right)
      node.right && queue.push(node.right)
    }
    level++
  }
  return result
}

console.log(levelOrder(a1))