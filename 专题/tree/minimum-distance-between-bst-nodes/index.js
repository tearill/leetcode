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
  const traversal = root => {
    if (!root) return; // 递归终止
    arr.push(root.val);
    traversal(root.left);
    traversal(root.right);
  }
  traversal(root);
  console.log(arr);
  // arr.sort((a, b) => a - b);
  // let min = Number.MAX_SAFE_INTEGER;
  // for (let i = 0, len = arr.length - 1; i < len; i++) {
  //   min = Math.min(min, arr[i+1] - arr[i]);
  // }
  // return min;
};

console.log(minDiffInBST(n1));