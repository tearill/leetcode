/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  let a = 0, b = 0
  for (let i = 0; i < nums.length; i++) {
    // let temp = b
    let c = Math.max(a + nums[i], b) // 第一个|第三个 和 第二个 比较
    // b = Math.max(a + nums[i], b)
    // a = temp
    a = b // a 向后移动
    b = c // b 作为当前最大值
  }
  return b
};

console.log(massage([1, 2, 3, 1]))
console.log(massage([2, 7, 9, 3, 1]))