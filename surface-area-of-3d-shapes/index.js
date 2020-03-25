/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return 0
  let area = 0
  for(let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > 0) {
        area += grid[i][j] * 4 + 2 // 周围 + 上下底面
      }
      if (i > 0) {
        area -= Math.min(grid[i][j], grid[i-1][j]) * 2 // 行有重叠，每次减去两个面
      }
      if(j > 0) {
        area -= Math.min(grid[i][j], grid[i][j-1]) * 2 // 列有重叠，每次减去两个面
      }
    }
  }
  return area
};

console.log(surfaceArea([[2]]))
console.log(surfaceArea([[1,2],[3,4]]))
console.log(surfaceArea([[1,0],[0,2]]))
console.log(surfaceArea([[2,2,2],[2,1,2],[2,2,2]]))