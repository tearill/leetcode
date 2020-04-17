/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let len = nums.length;
  if (len === 0) return false;
  if (len === 1) return true;
  let max = 0;
  for (let i = 0; i < len; i++){
    if (i > max) return false; // 最远可达位置都不够到下一个元素位置
    max = Math.max(max, i + nums[i]); // 当前节点可到的最远位置
  }
  return true;
};
console.time('fn');
// console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.timeEnd('fn');