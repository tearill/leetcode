/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // console.time('start')
  if (nums.length === 0) {
    return 0;
  }
  let len = nums.length;
  for (let i = 0; i < len;) {
    if (nums[i] == val) { // 如果是需要删除的元素，直接和最后一个元素交换
      nums[i] = nums[len - 1]; // 和数组最后一个元素交换
      len--; // 长度 -1 去掉最后一个元素
      // 交换完不能往后走，还要再判断一下换过来的元素的值是不是 val
    } else {
      i++; // 不需要删除的时候不进行额外的操作，直接往后走
    }
  }
  // console.timeEnd('end')
  return len;
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));