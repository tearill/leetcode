/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length === 0) return 0;
  let res = 0;
  height.forEach((item, index) => {
    let leftMax = 0, rightMax = 0;
    for (var i = 0; i <= index; i++) {
      leftMax = Math.max(height[i], leftMax);
    }
    for (var i = index; i < height.length; i++) {
      rightMax = Math.max(height[i], rightMax);
    }
    res += Math.min(leftMax, rightMax) - item
  })
  return total;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))