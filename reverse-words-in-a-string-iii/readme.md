# 反转字符串中的单词 III  
- leetcode👉https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/    
 
Let's take LeetCode contest 👉 "s'teL ekat edoCteeL tsetnoc"
1. 先将字符串中的所有单词反转一下位置 `s.split('').reverse().join('')`
2. 再将单词按照一个空格分开反转，再用一个空格连接，可以保证空格数不变