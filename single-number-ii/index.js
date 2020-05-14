/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   let map = {}
//   for (let i = 0; i < nums.length; i++) {
//     let key = nums[i]
//     if (!map[key]) {
//       map[key] = 1
//     } else if (map[key] === 1) {
//       map[key] = 2
//     } else {
//       delete map[key]
//     }
//   }
//   return +Object.keys(map)
// }

var singleNumber = function(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let tmp = map.get(nums[i])
    if (!tmp) {
      map.set(nums[i], 1)
    } else if (tmp === 1) {
      map.set(nums[i], 2)
    } else {
      map.delete(nums[i])
    }
  }
  return [...map.keys()]
}

console.log(singleNumber([2,2,3,2]))
console.log(singleNumber([0,1,0,1,0,1,99]))