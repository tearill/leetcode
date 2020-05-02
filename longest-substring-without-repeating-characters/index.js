/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s.length || s.length === 0) return 0
  if (s.length === 1) return 1
  let len = s.length, arr = [], max = 0
  for (let i = 0; i < len; i++) {
    let index = arr.indexOf(s[i]) // 查找重复那个元素的下标
    if (index !== -1) { // 如果元素重复
      arr.splice(0, index + 1) // 删除重复的元素以及重复元素之前的所有元素(重复元素之前的全部不满足条件)
    }
    arr.push(s.charAt(i))
    max = Math.max(max, arr.length)
  }
  return max
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
