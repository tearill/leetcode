/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  if (m === 0 || n === 0 || k === 0) {
    return 0;
  }
  function getSum(num) { // 求各个位置数字的和
    let answer = 0;
    while(num) {
      answer += num % 10;
      num = Math.floor(num / 10);
    }
    return answer;
  }
  // let count = 0;
  const direction = [ [-1, 0], [0, 1], [1, 0], [0, -1] ];

  // 已经走过的坐标
  let set = new Set(['0,0']);

  // 将遍历的坐标队列，题意要求从[0,0]开始走
  let queue = [[0, 0]];

  while(queue.length) {
    // 移除队首坐标
    let [x, y] = queue.shift();
    // 遍历四个方向
    for (let i = 0; i < 4; i++) {
      let dx = x + direction[i][0];
      let dy = y + direction[i][1];
      if (dx < 0 || dx >= m || dy < 0 || dy >= n || getSum(dx) + getSum(dy) > k || set.has(`${dx},${dy}`)) continue;
      // count++;
      // 走过的格子就不再纳入统计
      set.add(`${dx},${dy}`);
      // 将该坐标加入队列（因为这个坐标的四周没有走过，需要纳入下次的遍历）
      queue.push([dx,dy]);
    }
  }
  return set.size;
};

console.log(movingCount(2, 3, 1));