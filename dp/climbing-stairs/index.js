/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n === 0 || n === 1 || n === 2) return n
  let dp = []
  dp[1] = 1
  dp[2] = 2
  for(let i = 3; i <= n; i++) { // 下标从1开始，所以要取到 n
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}

console.log(climbStairs(10))