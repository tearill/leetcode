var isPalindrome = function (x) {
  if (x < 0) return false
  if (x < 10) return true
  let str = x.toString()
  let left = 0, right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) return false
    left++
    right--
  }
  return true
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(1))
