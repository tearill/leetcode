/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  let continent = [] // 陆地
  let ocean = [] // 海洋
  let len1 = grid.length
  let len2 = grid[0].length
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (grid[i][j] === 1) {
        continent.push([i, j])
      } else {
        ocean.push([i, j])
      }
    }
  }
  if (continent.length === 0 || ocean.length === 0) return -1
  let max = 0
  for (let i = 0; i < ocean.length; i++) {
    let distance = Number.MAX_VALUE
    for (let j = 0; j < continent.length; j++) {
      distance = Math.min(distance, Math.abs(ocean[i][0] - continent[j][0]) + Math.abs(ocean[i][1] - continent[j][1]))
      // console.log(distance)
    }
    max = Math.max(max, distance)
  }
  return max
};

console.log(maxDistance([[1,0,1],[0,0,0],[1,0,1]]))
console.log(maxDistance([[1,0,0],[0,0,0],[0,0,0]]))