/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  // console.log(arr1);
  let count = 0, // 出现的次数
    index = 0; // s2 中的位置
  for (let i = 0; i < n1; i++) { // 在 s2 中匹配 s1 的元素
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[index]) { // 元素相等
        index++;
      } 
      if (index === arr2.length) { // 匹配到一个完整的 s1
        index = 0;
        count++;
      }
    }
  }
  return parseInt(count / n2);
};

console.log(getMaxRepetitions('acb', 4, 'ab', 2));