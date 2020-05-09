# x 的平方根  
leetcode👉https://leetcode-cn.com/problems/sqrtx/  

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

```js
示例 1:
输入: 4
输出: 2

示例 2:
输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
```

- 取巧  
  `return parseInt(Math.sqrt(x));`  

- 暴力自增解法  
  只要不满足条件就一直自增，直到满足条件为止  
  ```js
  while(!(result * result <= x && (result + 1) * (result + 1) > x)){
    result++;
  }
  ```
  或者  
  ```js
  while(result * result <= x) {
    result++
  }
  ```

- 二分法查找  
  一个数的平方根不会超过它自身  
  一个数的平方根最多不会超过它自身的一半  

- 牛顿法  
  本质还是逼近  
  