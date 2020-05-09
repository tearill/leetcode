/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0 || x === 1) return x
  let left = 1, right = 999999
  while(left < right) {
    let middle = (left + right + 1) >> 1
    let square = middle ** 2
    if (square > x) {
      right = middle - 1
    } else {
      left = middle
    }
  }
  return parseInt(left)
};

console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(3))
console.log(mySqrt(2))
console.log(mySqrt(16))