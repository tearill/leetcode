# 两句话中的不常见单词  
leetcode👉https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/  

给定两个句子 A 和 B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）

如果一个单词在其中一个句子中只出现一次，在另一个句子中却没有出现，那么这个单词就是不常见的。

返回所有不常用单词的列表。

您可以按任何顺序返回列表。


- 分析  
  1. 空格分隔的单词 -> split('') 分割得到所有的单词  
  2. 在两个句子中只能出现一次  
     循环使用 map 进行计数，最后返回 count 次数为 1 的单词  