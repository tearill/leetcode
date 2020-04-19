# 统计重复的个数  
leetcode👉https://leetcode-cn.com/problems/count-the-repetitions/  

由 n 个连接的字符串 s 组成字符串 S，记作 S = [s,n]。例如，["abc",3]=“abcabcabc”。

如果我们可以从 s2 中删除某些字符使其变为 s1，则称字符串 s1 可以从字符串 s2 获得。例如，根据定义，"abc" 可以从 “abdbec” 获得，但不能从 “acbbe” 获得。

现在给你两个非空字符串 s1 和 s2（每个最多 100 个字符长）和两个整数 0 ≤ n1 ≤ 106 和 1 ≤ n2 ≤ 106。现在考虑字符串 S1 和 S2，其中 S1=[s1,n1] 、S2=[s2,n2] 。

请你找出一个可以满足使[S2,M] 从 S1 获得的最大整数 M 。

示例：
  ```js
  输入：
  s1 ="acb",n1 = 4
  s2 ="ab",n2 = 2

  返回：
  2
  ```

- 分析  
  s1 => acbacbacbacb  
  s2 => abab  
  使得 s1 满足 [s2, M]  
  把 s1 中所有的 c 去掉变成 => abababab (2 个 s2 组成)  

- 思路  
  可以把 s1、s2 两个字符串转成数组  
  在 s2 中匹配 s1 的字符，找到 s1 在 s2 中出现的次数，除以 s2 的长度就是出现的次数  