/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  if(S.length === 1 && S.length === 0) return S
  let count = 1
  let str = ''
  for(let i = 1; i <= S.length; i++) {
    if(S[i-1] === S[i]) { // 相同就计数器 +1
      count++
    } else { // 不同的时候保存压缩字符串并重置计数
      str += S.slice(i-1, i) + count
      count = 1
    }
  }
  return str.length >= S.length ? S : str
}

console.log(compressString("aabcccccaaa"))

console.log(compressString("abbccd"))