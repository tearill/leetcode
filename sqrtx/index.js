/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return 0
  let result = 0
  while(!(result * result <= x && (result + 1) * (result + 1) > x)){
    result++;
  }
  return result
};

console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(3))
console.log(mySqrt(2))
console.log(mySqrt(16))