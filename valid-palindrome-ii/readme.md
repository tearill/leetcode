# 验证回文字符串 II  
leetcode👉https://leetcode-cn.com/problems/valid-palindrome-ii/  

给定一个非空字符串 s，**最多**删除一个字符。判断是否能成为回文字符串  
```js
示例 1:
输入: "aba"
输出: True

示例 2:
输入: "abca"
输出: True
解释: 你可以删除c字符。
```

- 双指针  
  使用双指针向中间夹逼  
  如果左右指针的值不相同，判断是否可以通过删除一个字符构成回文字符串  
  删除左指针或者右指针的字符  