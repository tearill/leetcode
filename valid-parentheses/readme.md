# 有效的括号
- leetcode👉https://leetcode-cn.com/problems/valid-parentheses/  

- 使用哈希表存储左括号对应的右括号  
  用栈实现判断  
  1. 遍历字符串  
  2. 如果是左括号，入栈  
  3. 如果是右括号，出栈   如果此时栈是空的或者是栈顶元素不是对应的左括号，return false;