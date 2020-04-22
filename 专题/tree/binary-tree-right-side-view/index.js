function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
n1.left =  n2;
n1.right = n3;
const n4 = new TreeNode(5);
const n5 = new TreeNode(4);
n2.right = n4;
n3.right = n5;
// console.log(n1);

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let res = [];
  if (root === null) return res;
  let queue = [root];
  while(queue.length) {
    let nodeNum = queue.length; // 每层节点的数量
    for (let i = 0; i < nodeNum; i++) {
      let node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      i === nodeNum - 1 && res.push(node.val);
    }
  }
  return res;
};

console.log(rightSideView(n1));