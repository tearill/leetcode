/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let left = 0, right = s.length - 1

  function isValid(s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) return false // 去除一个字符之后还有不相等的
      left++
      right--
    }
    return true
  }

  while (left < right) {
    if (s[left] !== s[right]) { // 左右指针字符不相等
      return isValid(s, left + 1, right) || isValid(s, left, right - 1) // 判断左右指针字符删除一个之后是否回文
    }
    left++
    right--
  }
  return true
};

console.log(validPalindrome('aba'))
console.log(validPalindrome('abca'))
