/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  if (!nums) return 0
  let len = nums.length
  let map = new Map()
  map.set(0, 1)
  let sum = 0 // 记录前面数字的累加和
  let count = 0 // 记录符合条件的子数组个数
  for (let i = 0; i < len; i++) {
    sum += nums[i] // sum[i]
    // 如果前面数字之和加上这个数字正好等于 K(存在一个数字加上 nums[i] 结果为 K)
    // 说明找到了
    if (map.has(sum - k)) { // 有对应的前缀和
      count += map.get(sum - k)
    }
    map.has(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1)
  }
  return count
}

console.log(subarraySum([1, 1, 1], 2))
