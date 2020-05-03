var maxSubArray = function(nums) {
 let prev = 0, max = nums[0]
 nums.forEach(num => {
   prev = Math.max(prev + num, num)
   max = Math.max(max, prev)
 })
 return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
