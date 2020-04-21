/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays = (nums, k) => {
  let n = nums.length, 
    counts = new Array(n+1).fill(0).fill(1, 0, 1), 
    odd = 0, 
    result = 0;
  for (let i = 0; i < n; i++) {
    odd += nums[i] & 1;
    result += odd >= k ? counts[odd - k] : 0;
    counts[odd] += 1;
  }
  return result;
}

console.log(numberOfSubarrays([1,1,2,1,1], 3)); // [1,1,2,1] 和 [1,2,1,1] 
console.log(numberOfSubarrays([2,4,6], 1)); // 0
console.log(numberOfSubarrays([1,1,1,1,1], 1)); // 5
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2)); // 16