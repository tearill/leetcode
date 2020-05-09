/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x
  let x0 = 1, x1
  do {
    x1 = x0
    x0 = (x0 + x / x0) / 2
  } while (Math.abs(x0 - x1) >= 1e-6);
  return parseInt(x0)
};

console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(3))
console.log(mySqrt(2))
console.log(mySqrt(16))