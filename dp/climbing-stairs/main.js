/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n === 0 || n === 1 || n === 2) return n
  let prev1 = 1, // F(n-2)
      prev2 = 2, // F(n-1)
      temp = 0 // 计算的和
  for(let i = 3; i <= n; i++) {
    temp = prev1 + prev2 // 缓存计算总和
    prev1 = prev2
    prev2 = temp
  }
  return temp
}

console.log(climbStairs(10))