# 按奇偶排序数组  
leetcode👉https://leetcode-cn.com/problems/sort-array-by-parity/  

给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

你可以返回满足此条件的任何数组作为答案。  

- 分析  
  数组按照奇偶相间的顺序排列  
  类似奇偶链表的题目  

- 解法一：  
  奇偶数组，把数组分成奇偶两个数组，最后再拼接起来  

- 优化：  
  不使用两个数组  
  原地算法？  
  双指针  
  偶数就放在原地不动，如果是奇数，交换左右指针的元素，直到左指针的数是偶数为止  