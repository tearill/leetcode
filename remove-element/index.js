/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length === 0) {
    return 0;
  }
  let n = 0,
    len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] != val) { // 值不为 val 的元素 -> 需要留下的元素
      nums[n] = nums[i]; // 在原有数组 nums 上直接重新构造
      n++;
    }
  }
  return n;
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));