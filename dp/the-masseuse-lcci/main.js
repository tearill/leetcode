/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  let a = 0, b = 0
  for (let i = 0; i < nums.length; i++) {
    let temp = b
    b = Math.max(a + nums[i], b)
    a = temp
  }
};

console.log(massage([1, 2, 3, 1]))
console.log(massage([2, 7, 9, 3, 1]))