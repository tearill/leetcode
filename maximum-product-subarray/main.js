/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums) return null
  let len = nums.length
  if (len === 1) return nums[0]
  let max = nums[0], min = nums[0], ans = nums[0]
  for (let i = 1; i < len; i++) {
    let tmpMax = max, tmpMin = min
    max = Math.max(nums[i], Math.max(tmpMax * nums[i], tmpMin * nums[i]))
    min = Math.min(nums[i], Math.min(tmpMax * nums[i], tmpMin * nums[i]))
    ans = Math.max(ans, max)
  }
  return ans
}

console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]))
console.log(maxProduct([-2]))
console.log(maxProduct([-4,-3,-2]))
