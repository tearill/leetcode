var majorityElement = function(nums) {
	let count = 1 // 出现的次数
  let majority = nums[0] // 假设第一个数是 majority
  for(let i = 1; i < nums.length; i++) {
    // 求 majority
    // 如果再出现这个数，count++
    // 不一样的数，count--
    if (count == 0) { // 少数派
      majority = nums[i] // 安排一个人出来
    }
    if (nums[i] === majority) {
      count++
    } else {
      count--
    }
  }
  return majority
}

console.log(majorityElement([6, 5, 5]))