# 乘积最大的子数组  
leetcode👉https://leetcode-cn.com/problems/maximum-product-subarray/  

给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积  
```js
示例 1:
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。

示例 2:
输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
```

- 暴力法 -> 超时  
  二重循环遍历数组取子数组，并计算子数组的乘积，动态更新最大值  

- 优化  
  动态规划  
  ~~状态转移方程：`dp[i+1] = dp[i] * nums[i+1]`~~  
  当前位置的最优解未必是由前一个位置的最优解转移得到的，例如[5,6,−3,4,−3] -> dp: [5,30,−3,4,−3] -> 实际 max 为: 5×30×(−3)×4×(−3)  
  考虑正负性问题  
  1. 如果当前位置是负数，那就期望前一个 dp 也是负数并且尽可能的小，负负得正之后 dp 值(乘积)会尽可能的大  
  2. 如果当前位置是正数，那就期望前一个 dp 也是正数并且尽可能的大  
