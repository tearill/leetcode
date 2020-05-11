function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const n1 = new TreeNode(3)
const n2 = new TreeNode(5)
const n3 = new TreeNode(1)
n1.left = n2
n1.right = n3
const n4 = new TreeNode(6)
const n5 = new TreeNode(2)
n2.left = n4
n2.right = n5
const n6 = new TreeNode(7)
const n7 = new TreeNode(4)
n5.left = n6
n5.right = n7
const n8 = new TreeNode(0)
const n9 = new TreeNode(8)
n3.left = n8
n3.right = n9

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans
  const dfs = (root, p, q) => {
    if (root === null) return false
    const lson = dfs(root.left, p, q)
    const rson = dfs(root.right, p, q)
    if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      ans = root
    }
    return lson || rson || (root.val === p.val || root.val === q.val)
  }
  dfs(root, p, q)
  // console.log(ans.val)
  return ans
}

// 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出: 3
// 解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
console.log(lowestCommonAncestor(n1, n2, n3))
