# 全排列  
leetcode👉https://leetcode-cn.com/problems/permutations/  

给定一个 **没有重复** 数字的序列，返回其所有可能的全排列  

示例:
```js
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

- 回溯法  
  使用回溯遍历每一种选择  
  基本模板  
  ```js
  backtrack()
  if () {
    // 终止条件
    return
  }
  // 枚举每一种可能结果
  for() {
    // 选择
    backtrack() // 做出下一步选择
    // 撤销选择，回到上一步 - 很多时候是 pop 实现
  }
  ```