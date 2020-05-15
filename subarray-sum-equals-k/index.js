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
    for (let j = i; j < len; j++) {
      // 二重循环取子串
      let sub = nums.slice(i, j + 1)
      // console.log(sub)
      let sum = sub.reduce((acc, cur) => acc += cur, 0)
      // console.log(sum)
      if (sum === k) count++
    }
  }
  return count
}

console.log(subarraySum([1, 1, 1], 2))