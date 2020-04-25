# 七进制数  
leetcode👉https://leetcode-cn.com/problems/base-7/  

给定一个整数，将其转化为7进制，并以字符串形式输出  

- 进制转换  
  十进制转换其他进制通用  
  `str = num % radix + str`
  `num = parseInt(num / radix)`