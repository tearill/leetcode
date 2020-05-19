/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x % 10 === x && x >= 0) return true // 小于 10 的数，只有一位数
  if ( x < 0 ) return false // 负数不可能是回文数
  let str = x + ''
  return str === str.split('').reverse().join('')
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(1))
