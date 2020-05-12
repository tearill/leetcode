# 最小栈  
leetcode👉https://leetcode-cn.com/problems/min-stack/  

设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中  
pop() —— 删除栈顶的元素  
top() —— 获取栈顶元素  
getMin() —— 检索栈中的最小元素  
```js
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

1. 当一个元素要入栈时，取当前辅助栈的栈顶存储的最小值，与当前元素比较得出最小值，将这个最小值插入辅助栈中  
2. 当一个元素要出栈时，把辅助栈的栈顶元素也一并弹出  
3. 在任意一个时刻，栈内元素的最小值就存储在辅助栈的栈顶元素中  