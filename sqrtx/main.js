/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0 || x === 1) return x
  let left = 1, right = x
  while(left <= right) {
    let middle = left + ((right - left) >> 1)
    let square = middle ** 2
    if (square === x) {
      return middle
    } else if (square > x) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return right
};

console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(3))
console.log(mySqrt(2))
console.log(mySqrt(16))