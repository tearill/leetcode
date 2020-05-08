/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let max = 0
  if (!matrix || matrix.length == 0 || matrix[0].length == 0) return 0
  let row = matrix.length
  let col = matrix[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '1') { // 如果是 1
        let flag = true
        max = Math.max(max, 1)
        curMax = Math.min(row - i, col - j)
        for (let m = 1; m <= curMax - 1; m++) {
          if (matrix[i + m][j + m] === '0') break
          for (let n = 0; n < m; n++) {
            if (matrix[i + m][j + n] === '0' || matrix[i + n][j + m] === '0') {
              flag = false
              break
            }
          }
          if (flag) {
            max = Math.max(max, m + 1)
          } else {
            break
          }
        }
      }
    }
  }
  return max * max
}

console.log(maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]))