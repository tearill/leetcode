/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const len1 = word1.length,
    len2 = word2.length;

  let dp = new Array(len1+1).fill(0).map(() => new Array(len2+1).fill(0))
  // 创建一个 (len1+1) * (len2+1) 的二维数组，+1 是因为包含一个初始的空串
  // 初始化
  for (let i = 0; i <= len1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= len2; j++) {
    dp[0][j] = j;
  }
  // dp 状态转移
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      // 如果当前元素相等，最小操作次数就是上一次的操作次数
      // 如果当前元素不相等，从三个方向的操作次数中选最小值
      dp[i][j] = word1[i-1] == word2[j-1] ? dp[i-1][j-1] : (Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1);
    }
  }
  return dp[len1][len2];
};

console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));