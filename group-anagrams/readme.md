# 字母异位词分组  
leetcode👉https://leetcode-cn.com/problems/group-anagrams/  

给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。  

示例:
```js
输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

- 分析  
  判断每个元素各个位置字符的 ASCII 码相加总和是否相等？ -> 不可行，ASCII 码相加相同不一定各个位置字母相同  