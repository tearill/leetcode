/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length === 0) return 0 // 没有任何一家人
  if (nums.length === 1) return nums[0] // 只有一家人
  let dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  // 如果抢劫最后一家   -> nums[n] + dp[i-2]
  // 如果不抢劫最后一家 -> dp[i-1]
  for(let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]) // 把抢和不抢的最大值求出来
  }
  return dp[nums.length - 1]
};

console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))