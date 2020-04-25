# 最长公共前缀  
leetcode👉https://leetcode-cn.com/problems/longest-common-prefix/  

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""

示例 1:
```js
输入: ["flower","flow","flight"]
输出: "fl"
```

- 分析  
  公共前缀 -> 公共连续子串  
  以第一个字符串为基准，依次和后面的进行比较  