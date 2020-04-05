/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let len = A.length;
  if (!A || len === 0) return;
  let odd = [],
    even = [];
  A.forEach(item => {
    item % 2 == 0 && even.push(item); // 偶数
    item % 2 !== 0 && odd.push(item); // 奇数
  })
  return even.concat(odd);
};

console.log(sortArrayByParity([3,1,2,4]));