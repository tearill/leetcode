/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let s = 0;
  let x1 = x;
  while (x1 > 0) { // 翻转数字
    s = s * 10 + x1 % 10;
    x1 = parseInt(x1 / 10);
    console.log(s, x1)
  }
  return s == x;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(1))
