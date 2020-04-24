// 莱文斯坦距离
var a = 'mitcmu' // 原字符串
var b = 'mtacnu' // 比较的字符串
var n = 6, m = 6 // 字符串的长度
var minDistance = Infinity // 最短距离 动态规划
// 回溯算法
function lwstBT(i, j, edist) {
  if (i === n || j === m)  { // 退出条件
    console.log(edist)
    // 没有剩余字符的单词要加上有剩余字符单词的剩余字符个数
    if (i < n) edist += (n - i) // 编辑了几个
    if (j < m) edist += (m - j)
    if (edist < minDistance) minDistance = edist
    return
  }
  // 递归 穷举
  if (a[i] === b[j]) { // 两个位置的字符一样，距离为 0
    lwstBT(i + 1, j + 1, edist) // 递归继续下一个比较
  } else {
    // i j 不一样的情况下有多种决策需要做
    lwstBT(i + 1, j, edist + 1) // i + 1 => 忽略 i，i 被删除了
    lwstBT(i, j + 1, edist + 1)
    lwstBT(i + 1, j + 1, edist + 1)
  }
}

lwstBT(0, 0, 0)

console.log(minDistance)