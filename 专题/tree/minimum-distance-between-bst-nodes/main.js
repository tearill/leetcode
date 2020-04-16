function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
    //       4
    //     /   \
    //   2      6
    //  / \    
    // 1   3  

const n1 = new TreeNode(4);
const n2 = new TreeNode(2);
const n3 = new TreeNode(6);
n1.left = n2;
n1.right = n3;

const n4 = new TreeNode(1);
const n5 = new TreeNode(3);
n2.left = n4;
n2.right = n5;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
  // if (!root || !root.next) return;
  let arr = [];
  const inOrderTrversal = root => {
    let stack = [], cur = root;
    while(stack.length || cur != null) {
      if (cur != null) {
        stack.push(cur);
        cur = cur.left;
      } else {
        cur = stack.pop();
        arr.push(cur.val);
        cur = cur.right;
      }
    }
  }
  inOrderTrversal(root);
  // console.log(arr);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    min = Math.min(min, arr[i+1] - arr[i]);
  }
  return min;
};

console.log(minDiffInBST(n1));