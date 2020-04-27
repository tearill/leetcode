/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums || nums.length === 0) return -1
  let start = 0,
    end = nums.length - 1
  while(start <= end) {
    let mid = start + ((end - start) >> 1)
    if (nums[start] === target) return start
    if (nums[mid] === target) return mid // 如果中间元素正好是目标值
    if (nums[end] === target) return end

    if (nums[mid] >= nums[start]) {
      // [start, mid] 为有序区间
      if (target >= nums[start] && target <= nums[mid]) {
        // 如果 target 在有序区间内，舍弃无序区间
        end = mid - 1
      } else {
        // target 不在有序区间，舍弃有序区间
        start = mid + 1
      }
    } else {
      // [mid, end] 为有序区间
      if (target >= nums[mid] && target <= nums[end]) {
        // target 在有序区间内
        start = mid + 1
      } else {
        // target 不在有序区间内
        end = mid - 1
      }
    }
  }
  return -1 // 最后没找到，返回 -1
}

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([1, 3], 3))