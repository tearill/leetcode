/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let len = nums.length;
  if (len === 0) return false;
  if (len === 1) return true;
  const backtrack = (pos, nums) => {
    if (pos >= len - 1) { // 全部走一遍可达位置大于数组长度(整个数组都可到达)
      return true;
    }
    for (let i = nums[pos]; i >= 1; i--) { // 从当前位置开始往后跳，从最大跳跃距离开始减
      if (backtrack(pos + i, nums)) { // 跳到下一个位置开始继续向后一个一个试探
        return true;
      }
    }
    return false;
  }
  return backtrack(0, nums);
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.log(canJump([2,0]));