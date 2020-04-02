/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let m = board.length;
  let n = board[0].length;
  if (m === 0 || n === 0 || board == null) {
    return;
  }

  const CopyBoard = board.map(ary => {
    // 值是基础类型（Number），不存在引用问题，直接解构比较方便
    return [...ary];
  });

  let direction = [ [0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1] ]; // 八个方向
  
  // let m = CopyBoard.length;
  // let n = CopyBoard[0].length;

  // 利用双重循环保证每个细胞都走一遍
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let live = 0; // 周围活细胞个数
      for (let k = 0; k < 8; k++) { // 向八个方向遍历计算活细胞的个数
        let x = i + direction[k][0]; // 横坐标移动
        let y = j + direction[k][1]; // 纵坐标移动
        // 判断边界
        if (x < 0 || y < 0 || x >= m || y >= n) continue;
        // 活细胞
        live += CopyBoard[x][y] ? 1 : 0;
      }
      // 判断下一轮这个细胞是死亡还是存活
      if (live < 2 || live > 3) { // 死亡
        board[i][j] = 0;
      } else if (live === 2) {
        board[i][j] = CopyBoard[i][j]; // 状态不变
      } else if (live === 3 && !CopyBoard[i][j]) {
        board[i][j] = 1; // 细胞复活
      }
    }
  }
  return board;
};

console.log(gameOfLife([
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]))

// [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]