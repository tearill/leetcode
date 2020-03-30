/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  if (n === 1) return 0 // 只有一个元素的时候提前返回
  let res = 0
  for (let i = 2; i <= n; i++) { // 最后一轮剩下两个数字，所以要从 2 开始反推
    res = (res + m) % i    
  }
  return res
};

console.log(lastRemaining(5, 3))