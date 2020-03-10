function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

var a1 = new TreeNode(4)
var a2 = new TreeNode(2)
var a3 = new TreeNode(7)
a1.left = a2
a1.right = a3

var a4 = new TreeNode(1)
var a5 = new TreeNode(3)
a2.left = a4
a2.right = a5

var a6 = new TreeNode(6)
var a7 = new TreeNode(9)
a3.left = a6
a3.right = a7

/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
	if(root === null){
		return  0;
	}
	let left = maxDepth(root.left)
	let right = maxDepth(root.right)
	return Math.max(left, right) + 1
};

console.log(maxDepth(a1))