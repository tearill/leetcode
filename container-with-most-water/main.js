/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let len = height.length;
  if (len < 2) return 0;
  let leftP = 0,
    rightP = len - 1,
    volumn = 0;
  while(leftP < rightP) {
    let minHeight = Math.min(height[leftP], height[rightP]); // 取左右指针最小值
    volumn = Math.max(volumn, minHeight * (rightP - leftP)); // 计算盛水容量
    if (minHeight === height[leftP]) { // 如果取的是左指针，左指针右移
      leftP++;
    } else { // 取的是右指针，右指针左移
      rightP--;
    }
  }
  return volumn;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));