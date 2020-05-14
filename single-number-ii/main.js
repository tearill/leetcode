/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
  let res = 0
  for (let i = 0; i < 32; i++) { // 确定每一位
    let sum = 0
    for (num  of nums) {
      sum += (num >> i) & 1 // 统计当前位置有多少个元素
    }
    res ^= (sum % 3) << i; // 还原到第i位
  }
  return res
}

console.log(singleNumber([2,2,3,2]))
console.log(singleNumber([0,1,0,1,0,1,99]))