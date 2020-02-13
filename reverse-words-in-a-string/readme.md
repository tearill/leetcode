# 翻转字符串里的单词 & 面试题58 - I. 翻转单词顺序
- leetcode👉https://leetcode-cn.com/problems/reverse-words-in-a-string/
- leetcode👉https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof  

- 给定一个字符串，逐个翻转字符串中的每个单词。
- 无空格字符构成一个单词。
- 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
- 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

1. trim() 去除字符串前后的空格  
2. split(/\s+/) 转成数组，reverse() 翻转
3. join(' ') 使用空格拼接成字符串  