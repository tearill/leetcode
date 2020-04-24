/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let len = nums.length, res = 0
  if (len === 0) return 0
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      nums[i] > nums[j] && res++
    }
  }
  return res
};

console.log(reversePairs([7,5,6,4]))