function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
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
// var isSubtree = function (s, t) {
//   if (!s && !t) return true
//   if (!s || !t) return false
//   let sArr = [], tArr = []
//   const preorderTraversal = (root, arr) => {
//     if (root === null) return null
//     arr.push(root.val)
//     root.left && preorderTraversal(root.left, arr)
//     root.right && preorderTraversal(root.right, arr)
//     arr.push(root.val)
//   }
//   preorderTraversal(s, sArr)
//   preorderTraversal(t, tArr)
//   console.log(sArr.join(','), tArr.join(','))
//   return sArr.join(',').indexOf(tArr.join(',')) !== -1
// };

var isSubtree = function (s, t) {
  if (!s) return false;

  function isSame(root, target) {
    if (!root && !target) return true;
    if (!root || !target) return false;

    if (root.val === target.val) {
      return isSame(root.left, target.left) && isSame(root.right, target.right);
    } else {
      return false;
    }
  }

  return isSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
}

console.log(isSubtree(s, t))
