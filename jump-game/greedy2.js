/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let len = nums.length;
  if (len === 0) return false;
  if (len === 1) return true;
  let rightMax = 0
  for (let i = 0; i < len; i++) {
    if (i <= rightMax) {
      rightMax = Math.max(rightMax, i + nums[i]) // 不断地更新最远可达距离
      if (rightMax >= len - 1) { // 如果当前最远可达距离包括了数组最后一个元素
        return true
      }
    }
  }
  return false
};

// console.time('fn');
console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
// console.timeEnd('fn');
