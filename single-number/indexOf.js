/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i]
  }
}

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))