# 跳跃游戏 II  
leetcode👉https://leetcode-cn.com/problems/jump-game-ii/  

给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

示例:
```js
输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
```

- 贪心算法  
  维护当前能够到达的最大下标位置，记为边界  
  从左到右遍历数组，到达边界时，更新边界并将跳跃次数增加 1  

- 优化  
  不用访问最后一个元素  
  在访问最后一个元素之前，边界一定会大于等于最后一个位置，否则无法跳到最后一个位置  
  如果访问最后一个元素，在边界正好是最后一个元素的情况下，会增加一次跳跃次数  
  ```js
  if (i === end) { // 到达边界时，更新边界并将跳跃次数增加 1
    end = max
    step++
  }
  ```
  