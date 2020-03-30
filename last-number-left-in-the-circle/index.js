/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  if (n === 1) return 0 // 只有一个元素的时候提前返回
  let arr = [...new Array(n).keys()] // 数组的每一项就是下标的值 
  let head = 0
  const delFun = () => {
    head = (head + m - 1) % arr.length // 找到当前的第 m 个元素，当前元素是第 1 个，所以要减去 1
    arr.splice(head, 1)
  }
  while(arr.length > 1) {
    delFun()
  }
  return arr[0]
};

console.log(lastRemaining(5, 3))