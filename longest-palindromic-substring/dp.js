/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s) return ''
  let len = s.length
  let dp = [], res = '', max = -1
  for (let i = 0; i < len; i++) {
    dp[i] = []
  }
  for (let k = 0; k < len; k++) { // 控制字符串的长度
    for (let i = 0; i + k < len; i++) {
      let j = i + k // 结束位置
      if (k === 0) {
        dp[i][j] = true
      } else if (k === 1) {
        if (s[i] === s[j]) {
          dp[i][j] = true
        } else {
          dp[i][j] = false
        }
      } else {
        dp[i][j] = (dp[i + 1][j - 1] && s[i] === s[j]) ? true : false
      }
      if (j - i > max && dp[i][j]) { // 更新最长回文子串
        max = j - i
        res = s.substring(i, j + 1)
      }
    }
  }
  return res
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('abadd'))
