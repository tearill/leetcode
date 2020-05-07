function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// 给定的树 s:
//      3
//     / \
//    4   5
//   / \
//  1   2
const s = new TreeNode(3)
const s1 = new TreeNode(4)
const s2 = new TreeNode(5)
s.left = s1
s.right = s2
const s3 = new TreeNode(1)
const s4 = new TreeNode(2)
s1.left = s3
s1.right = s4
// 给定的树 t：
//    4 
//   / \
//  1   2
const t = new TreeNode(4)
const t1 = new TreeNode(1)
const t2 = new TreeNode(2)
t.left = t1
t.right = t2

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  return JSON.stringify(s).indexOf(JSON.stringify(t)) > -1
};

console.log(isSubtree(s, t))
