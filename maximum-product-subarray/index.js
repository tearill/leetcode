/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums) return 0
  let len = nums.length
  if (len === 1) return nums[0]
  let mul = 0
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let subArr = nums.slice(i, j + 1) // 子数组
      mul = Math.max(mul, subArr.reduce((acc, cur) => acc *= cur, 1))
    }
  }
  return mul
}

console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]))
console.log(maxProduct([-2]))