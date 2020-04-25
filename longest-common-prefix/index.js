/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = ''
  if (!strs || strs.length === 0) return res
  for (let i = 0; i < strs[0].length; i++) { // 以第一个字符串为基准
    for (let j = 1; j < strs.length; j++) { // 与剩下的字符串进行比较
      if (strs[j][i] !== strs[0][i]) return res // 有一个不符合
    }
    res += strs[0][i]
  }
  return res
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["car","cargo","cat"]))