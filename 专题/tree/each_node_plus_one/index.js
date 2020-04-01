const { preorderTraversal } = require('../traversal/main')

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

var a1 = new TreeNode(1); // root 根结点
var a2 = new TreeNode(2);
var a3 = new TreeNode(3);
a1.left = a2;
a1.right = a3;

var a4 = new TreeNode(4);
var a5 = new TreeNode(5);
a2.left = a4;
a2.right = a5;

var a6 = new TreeNode(6);
var a7 = new TreeNode(7);
a3.left = a6;
a3.right = a7;

//         1(root)
//     2       3
//   4   5   6   7
// 二叉树

var plus = function(root) {
  var plusOne = function(root) {
    if (root === null) return 
    root.val += 1
    plusOne(root.left)
    plusOne(root.right)
  }
  plusOne(root)
  return root
}

//         2(root)
//     3       4
//   5   6   7   8
// 二叉树

console.log(preorderTraversal(plus(a1)))