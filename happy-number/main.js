/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true
  const getSquare = (num) => {
    // num = String(num).split('').map(item => item ** 2).reduce((acc, cur) => acc + cur)
    if (num < 10) return num ** 2
    let result = 0
    while(num) {
      let temp = num % 10
      result += temp ** 2
      num = parseInt(num / 10)
    }
    return result
  }
  let fastP = getSquare(n)
  let slowP = n
  while(fastP !== slowP && fastP !== slowP) {
    fastP = getSquare(getSquare(fastP))
    slowP = getSquare(slowP)
  }
  return fastP === 1
}

console.log(isHappy(19))
console.log(isHappy(7))
console.log(isHappy(1))
console.log(isHappy(0))
