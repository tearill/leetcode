/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const compare = (a, b) => { // 比较判断区间是否相交
    if (a[0] > b[1] || a[1] < b[0]) return false; // 区间 1 最小值大于区间 2 最大值，区间 1 最大值小于区间 2 最小值
    return true
  }
  const swap = (a, b) => { // 合并区间
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
    // return {
    //   "intervals[i]": Math.min(a[0], b[0]), // 左边界取最小
    //   "intervals[i+1]": Math.max(a[1], b[1]) // 右边界取最大
    // }
  }
  // 先按照左边界从小到大排序
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0, len = intervals.length; i < len - 1; i++) { // len - 1 保证取 i + 1 保证不越界
    const cur = intervals[i];
    const next = intervals[i+1];
    const isIntersect = compare(cur, next); // 区间是否有交集
    if (isIntersect) { // 如果有交集，合并区间
      // [intervals[i], intervals[i+1]] = [Math.min(cur[0], next[0]), Math.max(cur[1], next[1])];
      intervals[i] = null; // 干掉一个区间
      intervals[i+1] = swap(cur, next); // 直接修改另一区间
    }
  }
  return intervals.filter(item => item != null);
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));