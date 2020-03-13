# 爬楼梯  
leetcode👉https://leetcode-cn.com/problems/climbing-stairs/  

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。  

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？  
 
- 思路：  
  动态规划  
  结果最后一定是从第 n-1 个台阶或者是第 n-2 个台阶走到第 n 个台阶  
  可以得出 F(n) = F(n-2) + F(n-1)  
  边界：F(1) = 1 || F(2) = 2  

- 缓存？ --- 记忆化搜索(备忘录算法)  
  每次的结果只依赖它的前两次计算的结果，可以先把前两次的结果缓存下来  