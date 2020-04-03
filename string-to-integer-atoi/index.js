/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let len = str.length
  if (!str || len === 0) return 0
  let reg = /^[\+\-]?\d+/, res
  str = str.replace(/^\s*/, "") // 去除开头的空格
  if (Number(str.match(reg)) != undefined) {
    res = Number(str.match(reg))
  }
  if (res > 0) {
    return Math.min(res, 2 ** 31 - 1)
  } else if(res < 0) {
    return Math.max(res, (-2) ** 31)
  }
  return 0
};

console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))