# 加一  
leetcode👉https://leetcode-cn.com/problems/plus-one/  

给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:
```js
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```

- 方案一  
  转成整数之后做加法  
  容易超出整数范围限制 -> 使用 BigInt 防止数字过大  

- 方案二  
  末位 +1 -> 按照加法计算规则进行计算  
  