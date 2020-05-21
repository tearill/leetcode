/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s || s.length < 1) return ''
  let len = s.length
  let start = 0, end = 0
  for (let i = 0; i < len - 1; i++) { // 最后一个无需枚举，最后一个无法向右扩展
    let oddLen = expand(s, i, i) // 奇数
    let evenLen = expand(s, i, i + 1) // 偶数
    let curMax = Math.max(oddLen, evenLen) // 取当前最长的回文子串
    if (curMax > end - start) {
      start = i - Math.floor((curMax - 1) / 2)
      end = i + Math.floor(curMax / 2)
    }
  }
  return s.slice(start, end + 1)
}

function expand(s, left, right) { // 向两端扩展
  while(left >= 0 && right < s.length && s[left] === s[right]) { // 保证不越界并且两端字符相等
    left--
    right++
  }
  // 跳出循环的时候 s[left] != s[right]
  // 回文串长度为 right - left + 1 - 2
  return right - left - 1 // 回文字符为 left 和 right 中间的字符，并且不包含 left 和 right
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('babad'))
