// 不用递归实现树的遍历
function TreeNode(val) { // 形成一棵树的结点
    this.val = val;
    this.left = this.right = null; // 左指针、右指针
}

//         1(root)
//     2       3
//   4   5   6   7
// 二叉树

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

// 先序遍历
var preorderTraversal = function (root) {
    var stack = [],
        result = [],
        cur = root;
    while(stack.length > 0 || cur != null) {
        if (cur != null) {
            result.push(cur.val);
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            cur = cur.right;
        }
    }
    return result;
}

// console.log(preorderTraversal(a1));


// 中序遍历
var inorderTraversal = function (root) {
    var stack = [], // 栈 只有它的左子树，右子树都已经解决了，它就可以出栈
        result = [], // 结果数组
        cur = root; // 当前结点
    // 循环一次 
    while(stack.length > 0 || cur != null) {
        if (cur != null) {
            stack.push(cur); // 根节点先入栈
            cur = cur.left;
        } else {
            cur = stack.pop(); // 出栈 4
            result.push(cur.val); // 进入结果数组
            cur = cur.right;
        }
    }
    return result;
}

// console.log(inorderTraversal(a1));

// 后序遍历
var postorderTraversal = function (root) {
    var stack = [],
        result = [],
        cur = root;
    while(stack.length > 0 || cur != null) {
        if (cur != null) {
            result.push(cur.val);
            stack.push(cur);
            cur = cur.right; 
        } else {
            cur = stack.pop();
            cur = cur.left;
        }
    }
    return result.reverse();
}

// console.log(postorderTraversal(a1));

module.exports = {
    preorderTraversal,
    inorderTraversal,
    postorderTraversal
}