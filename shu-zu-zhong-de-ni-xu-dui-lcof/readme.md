# 数组中的逆序对  
leetcode👉https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/  

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

示例 1:
```js
输入: [7,5,6,4]
输出: 5
```

- 分析  
  [7, 5, 6, 4] -> [7, 5] [7, 6] [7, 4] [5, 4] [6, 4]  

- 暴力法  
  双重循环先后遍历数组进行判断 -> 超时  

- 归并排序  
  在每次排序的时候要知道位置信息  
  [7, 5, 6, 4]  
  => [7, 5] [6, 4]  
  => [5, 7] [4, 6] +2  
  => [4, ] 归并  +2  
  => [4, 5] +0  
  => [4, 5, 6] +1  
  => [4, 5, 6, 7] +0  
  在归并的时候，只要有右边区间的数被放到左边的前面，就说明有逆序对，逆序对的个数就是左边区间中剩下的数字的个数  