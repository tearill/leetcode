/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
  if (seq.length < 1) {
    return [1];
  }
  return seq.split('').map((item, index) => {
    if (item === '(') {
      return index % 2;
    } else {
      return 1 - index % 2;
    }
  });
};

console.log(maxDepthAfterSplit("(()())"));
console.log(maxDepthAfterSplit("()(())()"))
