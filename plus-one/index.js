/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let nums = BigInt(digits.join('')) // 防止超限
  let res = String(nums + 1n)
  return res.split('')
};

console.log(plusOne([9]))
console.log(plusOne([1, 2, 3]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))