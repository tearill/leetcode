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
// 2 的子树形成可以用递归的思想去形成
var a4 = new TreeNode(4); 
var a5 = new TreeNode(5); 
a2.left = a4;
a2.right = a5;

var a6 = new TreeNode(6); 
var a7 = new TreeNode(7); 
a3.left = a6;
a3.right = a7;
// 一个结点，左右指向另外两个结点 --- 简单的事情 --- 递归执行，每个子结点(左边，右边)变成新的根节点，退出条件是叶子结点

// 先序遍历
var preorderTraversal = function (root) {
    // 1, 2, 4, 5, 3, 6, 7
    let arr = [];
    const preorder = root => {
        if (root === null) return null; // 退出条件
        arr.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return arr;
}

console.log(preorderTraversal(a1));

// 打印 中序遍历 --- 使用递归遍历树
var inorderTraversal = function (root) {
    // 4, 2, 5, 1, 6, 3, 7 
    let arr = []; // 放结点结果的数组 将树 -> 数组
    const inorder = root => {
        if (root === null) return null; // 退出条件
        inorder(root.left); // 沿着左子树一直递归
        arr.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return arr;
}

console.log(inorderTraversal(a1));

// 后序遍历
var postorderTraversal = function(root) {
    let arr = [];
    const postorder = (root) => {
        if (root === null) return null;
        postorder(root.left);
        postorder(root.right);
        arr.push(root.val);
    }
    postorder(root);
    return arr;
}

console.log(postorderTraversal(a1));