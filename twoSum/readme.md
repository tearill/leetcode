# 两数之和
- leetcode👉https://leetcode-cn.com/problems/two-sum/

- nums[] target
  1. 求 diff = target - num[i] 每次遍历时使用临时变量 diff 用来保存目标值与当前值的差值
  2. 把 下标 i 放进 a[nums[i]] 存放当前值和索引
  3. 当有和为 target 的两个元素时，a[] 中会有一个元素的索引等于 diff，返回查找值的索引值与当前索引的值 i
