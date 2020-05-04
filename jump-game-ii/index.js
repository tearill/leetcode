/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let len = nums.length
  if (len === 1) return 0
  let step = 0, max = 0, end = 0
  for (let i = 0; i < len - 1; i++) {
    max = Math.max(max, i + nums[i]) // 当前节点可到的最远位置
    if (i === end) { // 到达边界时，更新边界并将跳跃次数增加 1
      end = max
      step++
    }
  }
  return step
}

console.log(jump([2,3,1,1,4]))
