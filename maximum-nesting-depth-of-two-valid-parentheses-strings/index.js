/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
  if (seq.length < 1) {
    return [1];
  }
  let depth = 0;
  return seq.split('').map(item => {
    if(item === '(') {
      // depth++; // 深度 +1
      return depth++ % 2; // 先加再取模
    } else {
      return --depth % 2; // 先取值再自减
    }
  })
};

console.log(maxDepthAfterSplit("(()())"));
console.log(maxDepthAfterSplit("()(())()"))