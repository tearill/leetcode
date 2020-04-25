/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
      continue
    }
  }
  return [1, ...digits]
}

console.log(plusOne([9]))
console.log(plusOne([9, 9]))
console.log(plusOne([1, 0, 9]))
console.log(plusOne([1, 2, 3]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))