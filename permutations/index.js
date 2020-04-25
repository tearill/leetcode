/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  let len = nums.length
  if (len === 0) return res
  let path = []
  
  function backtrack(path) {
    if (path.length === len) { // 退出条件，遍历的元素数量够了
      res.push(path) // 放进结果数组
      return
    }
    for (let i = 0; i < len; i++) {
      if (path.indexOf(nums[i]) == -1) {
        path.push(nums[i]) // 不包含的情况下直接放进去
        backtrack(path.slice()) // 选择下一个元素
        path.pop() // 撤销选择
      }
    }
  }

  backtrack(path)
  return res
}

console.log(permute([1,2,3]))