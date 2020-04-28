/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  var res = [];
  var arr = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    if (arr[nums[i]] !== undefined) {
      arr[nums[i]]++;
    } else {
      arr[nums[i]] = 1;
    }
  }
  res = Object.keys(arr).filter(item => arr[item] === 1);
  return res;
};

console.log(singleNumbers([1, 2, 1, 3, 2, 5]));