/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let len = height.length,
    res = 0,
    cur = 0, // 即将加入的元素下标，也就是计算的时候的右边界
    stack = []; // 栈里存的是下标
  if (len === 0) return 0;
  while (cur < len) {
    // 如果 当前的高度 小于或等于 栈顶对应元素 的高度，将当前索引入栈(满足单调递减)
    // 当 当前高度 小于 栈顶对应元素 的高度，需要进行计算(单调栈继续添加元素就不单调了)
    while (stack.length && height[cur] > height[stack[stack.length - 1]]) {
      let curIndex = stack.pop(); // 当前的元素下标
      if (stack.length === 0) break;
      // 下标相隔的位置为 即将加入的元素下标 减去 栈内前一个元素 再减去 1
      let distance = cur - stack[stack.length - 1] - 1; // 下标相隔的距离
      // height[stack[stack.length - 1]] 左边界
      let h = Math.min(height[cur], height[stack[stack.length - 1]]) - height[curIndex];
      res += distance * h;
    }
    stack.push(cur++);
  }
  return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))