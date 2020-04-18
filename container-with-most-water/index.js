/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let len = height.length;
  if (len < 2) return 0;
  let volumn = 0;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      volumn = Math.max(volumn, Math.min(height[i], height[j]) * (j - i)); // 挑最短边计算盛水容量      
    }
  }
  return volumn;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));