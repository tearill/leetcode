/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  if (!nums || nums.length === 0) return 0;
  let len = nums.length, 
    count = 0,
    odd = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let sub = nums.slice(i, j + 1);
      // console.log(sub);
      odd = sub.filter(item => item % 2 !== 0).length;
      // console.log(odd);
      odd === k && count++;
      odd = 0;
    }
  }
  // console.log(count);
  return count;
};

console.log(numberOfSubarrays([1,1,2,1,1], 3)); // [1,1,2,1] 和 [1,2,1,1] 
console.log(numberOfSubarrays([2,4,6], 1)); // 0
console.log(numberOfSubarrays([1,1,1,1,1], 1)); // 5
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2)); // 16