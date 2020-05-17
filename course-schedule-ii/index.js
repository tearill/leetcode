/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0) // 构建入度数组
  let map = {} // 后续课程
  // 数组第二个位置 [1] 上是后续依赖的课程 -> 作为 key
  // 数组第一个位置 [0] 上是要学习的课程 -> 作为 value
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++ // 初始化入度数组
    if (map[prerequisites[i][1]]) { // 初始化后续课程哈希表
      map[prerequisites[i][1]].push(prerequisites[i][0])
    } else {
      let list = []
      list.push(prerequisites[i][0])
      map[prerequisites[i][1]] = list
    }
  }
  // console.log(map)
  // return 
  let res = [] // 结果数组
  let queue = [] // 入度为 0 课程队列
  for (let i = 0; i < numCourses; i++) { // 初始入度为 0 的课程
    if (inDegree[i] === 0) queue.push(i)
  }
  while(queue.length) { // 退出条件为没有入度为 0 的课程可选
    let cur = queue.shift() // 选课
    res.push(cur)
    let tmp = map[cur] // 当前选课对应的后续课程
    if (tmp && tmp.length) {
      for (let i = 0; i < tmp.length; i++) { // 遍历对应的后续课程
        inDegree[tmp[i]]-- // 将后续课程的入度 -1
        if (inDegree[tmp[i]] === 0) { // 后续课程入度变为 0 的时候放入到 queue 中
          queue.push(tmp[i])
        }
      }
    }
  }
  return res.length === numCourses ? res : [] // 判断是否所有的课程都被选择到
};

console.log(findOrder(2, [[1,0]]))
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]))