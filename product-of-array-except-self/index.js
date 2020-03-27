/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  if (nums.length === 2) return nums[0] * nums[1]
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let arr = nums.filter((item, index) => index != i)
    // console.log(arr)
    res.push(arr.reduce((pre, cur) => pre * cur))
  }
  return res
};

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]