/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s.length || s.length === 0) return 0
  if (s.length === 1) return 1
  let len = s.length, max = 0, index = 0
  for (let i = 0, j = 0; j < len; j++) {
    index = s.substring(i, j).indexOf(s[j])
    if (index !== -1) {
      i += index + 1
    }
    max = Math.max(max, j - i + 1)
  }
  return max
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
