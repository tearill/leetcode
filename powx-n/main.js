/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) return 1 / myPow(x, -n)
  if (n === 0) return 1;
  if (x == 0) return 0;
  if (n % 2 === 0) return myPow(x * x, Math.floor(n / 2))
  return myPow(x * x, Math.floor(n / 2)) * x
}

console.log(myPow(2.00000, 10))
console.log(myPow(2.10000, 3))
console.log(myPow(2.00000, -2))
