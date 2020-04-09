/**
 * @param {number} n
 * @return {string[]}
 */
function dfs(left, right, list, result) {
	if(left === 0 && right === 0){ // 左右括号都为 0，退出条件
    result.push(list);
    return;
	}
	// dfs 只有两种情况，加入 list 或不加，提前判断加入括号是否有效
	if(left > 0) { // 左括号无所谓增加 有就放
		dfs(left - 1, right, list + '(', result); // 放入哪边括号 剩余 n -1
	}

  // 已有的左括号 > 右括号才能放入，即剩下的左括号 < 右括号
  // 如果右括号剩余多于左括号剩余的话，右括号太多了，可以拼接右括号
	if(left < right) {
		dfs(left, right - 1, list + ')', result);
	}
}
var generateParenthesis = function(n) {
	let result = [];
	// let list = '';
	// 已知 n，不需要记录当前 visited 来判断退出条件
	dfs(n, n, '', result);
	return result;
};

console.log(generateParenthesis(3));