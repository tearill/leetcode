/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) return 1
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  let res = 1
  while (n) {
    if (n % 2) {
      res *= x
    }
    n >>= 1
    x *= x
  }
  return res
}

console.log(myPow(2.00000, 10))
console.log(myPow(2.10000, 3))
console.log(myPow(2.00000, -2))
