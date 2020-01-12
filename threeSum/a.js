var threeSum = function(nums) {
    let res = []
    for (let i = 0; i < nums.length - 2; i++) { // 每个人
      for (let j = i + 1; j < nums.length - 1; j++) { // 依次拉上其他每个人
        for (let k = j + 1; k < nums.length; k++) { // 去问剩下的每个人
          if (nums[i] + nums[j] + nums[k] === 0) { // 我们是不是可以一起组队
            res.push([nums[i], nums[j], nums[k]])
          }
        }
      }
    }
    return res
  }

console.log(threeSum([-1, 0, 1, 2, -1, -4]));