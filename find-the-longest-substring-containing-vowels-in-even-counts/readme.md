# 每个元音包含偶数次的最长子字符串  
leetcode👉https://leetcode-cn.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/  

给你一个字符串 s ，请你返回满足以下条件的最长子字符串的长度：每个元音字母，即 'a'，'e'，'i'，'o'，'u' ，在子字符串中都恰好出现了偶数次  
```js
示例 1：
输入：s = "eleetminicoworoep"
输出：13
解释：最长子字符串是 "leetminicowor" ，它包含 e，i，o 各 2 个，以及 0 个 a，u 

示例 2：
输入：s = "leetcodeisgreat"
输出：5
解释：最长子字符串是 "leetc" ，其中包含 2 个 e

示例 3：
输入：s = "bcbcbc"
输出：6
```

- 把 5 个元音字母出现的奇偶次数当做状态来存储  
  总共会出现 32 种可能的结果(2 的 5 次方)  
  