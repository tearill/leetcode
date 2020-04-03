/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let len = str.length
  if (!str || len === 0) return 0
  // str = str.replace(/^\s*/, "") // 去除开头的空格
  let index = 0, negative = false // 初始为正数
  while(index < len && str.charAt(index) === ' ') {
    index++
  }
  if (index === len) return 0 // 全是空格
  if(str.charAt(index) === '-') {
    negative = true // 负数
    index++
  } else if(str.charAt(index) === '+') {
    // negative = false
    index++ // 正数
  } else if(isNaN(str.charAt(index))) {
    return 0 // 非数字字符
  }
  let res = 0
  while(index < len && !isNaN(str.charAt(index)) && str.charAt(index) != ' ') {
    let digit = Number(str.charAt(index)) // 每一位的数字
    if (res > ((2 ** 31) - 1 - digit) / 10) { // 可能在进位累加的时候已经越界了
      // res * 10 可能越界，或是 res * 10 + digit 越界
      return negative ? (-2) ** 31 : (2 ** 31) -1
    }
    res = res * 10 + digit
    index++
  }
  return negative ? -res : res // 正负数
};

console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))
console.log(myAtoi("  0000000000012345678"))
console.log(myAtoi("010"))
console.log(myAtoi("2147483648"))