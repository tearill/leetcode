/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) return ''
  let len = s.length
  if (len === 1) return s
  let res = '', max = 0
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let subStr = s.slice(i, j + 1)
      if (isPalindrome(subStr) && subStr.length > max) {
        res = subStr
        max = subStr.length
      }
    }
  }
  return res
}

function isPalindrome(str) {
  let len = str.length
  let middle = parseInt(len / 2)
  for (let i = 0; i < middle; i++) {
    if (str[i] != str[len - i - 1]) {
      return false
    }
  }
  return true
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('"babad"'))
