/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num === 0) return "0"
  let isPositive = true
  let str = ''
  if (num < 0) {
    num = -num
    isPositive = false
  }
  while(num > 0) {
    str = num % 7 + str
    num = parseInt(num / 7)
  }
  return isPositive ? str : '-' + str
}

console.log(convertToBase7(100))
console.log(convertToBase7(-7))