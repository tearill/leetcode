# 除自身以外数组的乘积  
leetcode👉https://leetcode-cn.com/problems/product-of-array-except-self/  

给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

进阶：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）

- 分析：  
  每次要把除了自身的所有数组元素相乘  
  时间复杂度 O(n) -> 只能进行一次遍历  

- 违规的放法：  
  遍历数组，通过 nums.find() 找到非当前元素，放入一个数组  
  把数组中所有元素相乘，乘积放进结果数组  

- O(n) 时间复杂度 --- 不能嵌套循环  
  分别求出每个元素左右边所有元素的乘积，然后把左右乘积相乘得到结果  
  1. 对于左边的元素，第一个元素左边没有元素 -> left[0] = 1  
  2. 对于右边的元素，最后一个元素右边没有元素 -> right[nums.length - 1] = 1  
  再用初始化好的 left 和 right 去累乘计算(第一个和最后一个都被初始化为了1，所以乘积总会比当前元素慢一个)  
  