/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) return 1;
  if (x == 0) return 0;
  let pow = Math.abs(n)
  let result = 1
  for (let i = 0; i < pow; i++) {
    result *= x
  }
  return n > 0 ? result : 1 / result
}

console.log(myPow(2.00000, 10))
console.log(myPow(2.10000, 3))
console.log(myPow(2.00000, -2))
