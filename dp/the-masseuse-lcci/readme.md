# 面试题 17.16. 按摩师  
leetcode👉https://leetcode-cn.com/problems/the-masseuse-lcci/  

一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数  

- 类似打家劫舍(I)  
  动态规划解题  

- 分析：  
  1. n = 1, `F(1) = nums[1]  `
  2. n = 2, `F(2) = Math.max(nums[1], nums[2])`  
  3. n = 3, 两种选择：  
      a. 接第三个人，同时接了第一个人，`F(3) = F(1) + nums[3]`  
      b. 不接第三个人，保持 `Math.max(nums[1], nums[2])`，这时 `F(3) = max(nums[1], num2[2])`  

  F(n) = Math.max(F(n-1), F(n-2) + nums[i])