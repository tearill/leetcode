/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i]) ? map.delete(nums[i]) : map.set(nums[i], 1)
  }
  // console.log(map)
  return [...map.keys()]
}

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))