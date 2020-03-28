/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  if (nums.length === 2) return [nums[1], nums[0]]
  let len = nums.length
  let res = [1] // 结果数组
  for (let i = 1; i < len; i++) { // 求每个数左边的乘积
    res[i] = nums[i-1] * res[i-1]
  }
  let right = 1
  for (let j = len - 1; j >= 0; j--) { // 求每个数右边的乘积，并和左边的乘积相乘
    res[j] = res[j] * right
    right = right * nums[j]
  }
  return res
};

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]