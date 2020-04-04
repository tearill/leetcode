/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
  if (height.length === 0) return 0;
  let left = 0,
    right = height.length - 1,
    leftMax = 0,
    rightMax = 0,
    res = 0;
  while(left <= right) {
    if (leftMax < rightMax) {
      res += leftMax - height[left] > 0 ? leftMax - height[left] : 0;
      leftMax = Math.max(leftMax, height[left]);
      left++;
    } else {
      res += rightMax - height[right] > 0 ? rightMax - height[right] : 0;
      rightMax = Math.max(rightMax, height[right]);
      right--;
    }
  }
  return res
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))