/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalSquare = function (matrix) {
  let max = 0
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0
  let row = matrix.length, col = matrix[0].length
  let dp = new Array(row).fill(0).map(() => new Array(col).fill(0))
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1
        }
        max = Math.max(max, dp[i][j])
      }
    }
  }
  return max ** 2
}

console.log(maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]))