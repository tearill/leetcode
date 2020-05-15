/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.origin = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.origin
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let nums = [...this.origin]
  let len = nums.length
  for (let i = 0; i < len; i++) {
    // console.log(Math.random() * (len + 1))
    let randomIndex = Math.floor(Math.random() * (len - i));
    // console.log(randomIndex);
    [nums[len - i - 1], nums[randomIndex]] = [nums[randomIndex], nums[len - i - 1]];
  }
  return nums
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
let nums = [1, 2, 3]
var obj = new Solution(nums)
var s1 = obj.shuffle()
console.log(s1)
var s2 = obj.reset()
console.log(s2)
var s3 = obj.shuffle()
console.log(s3)
