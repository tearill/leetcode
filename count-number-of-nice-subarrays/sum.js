/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  if (!nums || nums.length === 0) return 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] % 2 != 0) {
      nums[i] = 1; // 奇数
    } else {
      nums[i] = 0;
    }
  }
  let map = [], sum = 0, res = 0;
  map[0] = 1; // 等于 0 的时候有一种方法，即不需要任何一个数
  for (let i = 1; i <= len; i++) {
    sum += nums[i - 1];
    console.log(sum);
    sum = 0;
    // res += map[sum - k];
    // console.log(res);
    // map[sum]++;
  }
  // return res;
};

console.log(numberOfSubarrays([1,1,2,1,1], 3)); // [1,1,2,1] 和 [1,2,1,1] 
console.log(numberOfSubarrays([2,4,6], 1)); // 0
console.log(numberOfSubarrays([1,1,1,1,1], 1)); // 5
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2)); // 16