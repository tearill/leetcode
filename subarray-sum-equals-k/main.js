/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  if (!nums) return 0
  let len = nums.length
  let count = 0
  for (let i = 0; i < len; i++) {
    let sum = 0 // 累加和
    for (let j = i; j < len; j++) {
      // 计算两个下标之间元素的累加和
      sum += nums[j]
      sum === k && count++
    }
  }
  return count
}

console.log(subarraySum([1, 1, 1], 2))