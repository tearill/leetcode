/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid) return false;
  let m = grid.length;
  if (m === 0) return 0;
  let n = grid[0].length;

  let count = 0; // 计算岛屿
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if(grid[i][j] === '1') {
        dfs(grid, i, j, m, n);
        count++;
      }
    }
  }

  function dfs (grid, i, j, m, n) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] != '1') {
      return;
    }

    grid[i][j] = '0'; // 标记访问

    dfs(grid, i + 1, j, m, n);
    dfs(grid, i, j + 1, m, n);
    dfs(grid, i - 1, j, m, n);
    dfs(grid, i, j - 1, m, n);
  }

  return count;
};

console.log(numIslands([
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]));

console.log(numIslands([
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
]));

console.log(numIslands([]))