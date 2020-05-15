# 打乱数组  
leetcode👉https://leetcode-cn.com/problems/shuffle-an-array/  

打乱一个没有重复元素的数组  
```js
示例:
// 以数字集合 1, 2 和 3 初始化数组。
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3] 的排列返回的概率应该相同。
solution.shuffle();

// 重设数组到它的初始状态[1,2,3]。
solution.reset();

// 随机返回数组[1,2,3]打乱后的结果。
solution.shuffle();
```

举例  
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  
9: 和未洗牌区间，0 ~ 9 选择一个随机数 交换  
8: 和未洗牌区间，0 ~ 8 选择一个随机数 交换  
...  
0  
每个数都参与交换  
```js
let randomIndex = Math.floor(Math.random() * (len - i)); // 随机区间
```
`arr[len - i - 1]` => 从后往前选的第一个数  
`[arr[len - i - 1], arr[randomIndex]] = [arr[randomIndex], arr[len - i - 1]];` => 利用解构交换位置  
