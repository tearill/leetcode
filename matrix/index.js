/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  if (!matrix) return;
  let m = matrix.length;
  let n = matrix[0].length;
  let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // 四个方向
  let queue = [],
    res = Array.from(new Array(m), () => new Array(n).fill(0)),
    visited = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        visited.add(`${i}:${j}`);
        queue.push({i, j});
      }
    }
  }
  while(queue.length !== 0) {
    let { i, j } = queue.shift();
    for (let k = 0; k < 4; k++) { // 向四个方向遍历
      let dx = i + directions[k][0];
      let dy = j + directions[k][1];
      // 如果四邻域的点是 -1，表示这个点是未被访问过的
      // 这个点到 0 的距离可以更新成 matrix[x][y] + 1
      if (dx >= 0 && dx < m && dy >=0 && dy < n && !visited.has(`${dx}:${dy}`)) {
        res[dx][dy] = res[i][j] + 1;
        visited.add(`${dx}:${dy}`);
        queue.push({i: dx, j: dy}); // 表示已经访问
      }
    }
  }
  return res;
};

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]));
// 0 0 0
// 0 1 0
// 1 1 1

// 0 0 0
// 0 1 0
// 1 2 1