/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let len = A.length;
  if (!A || len === 0) return;
  let left = 0,
    right = len - 1;
  while(left < right) {
    if (A[left] % 2 === 0) {
      left++; // 偶数就放在前面，不用管
    } else { // 如果是奇数，就和后面的数拿去交换，换到是偶数为止
      let temp = A[left];
      A[left] = A[right];
      A[right] = temp;
      right--;
    }
  }
  return A;
};

console.log(sortArrayByParity([3,1,2,4]));