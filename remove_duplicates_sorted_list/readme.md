# 删除排序数组中的重复项
- leetcode👉https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

- 读题:
  sortedArr [1, 1, 2] 3 就地删除重复项
  return length 2 返回新的数组长度

- 一次遍历？
  res []  空间复杂度 O(n)
  for 
  排好序 后面的项一定会大于或等于前面的项
  等于要原地删除
  return res.length
  抽象 数理逻辑
- 两个指针 pre cur 
  https://camo.githubusercontent.com/26b1547fb6119bbaec4a110ad27c753415b2b8b2/68747470733a2f2f626c6f672d313235373132363534392e636f732e61702d6775616e677a686f752e6d7971636c6f75642e636f6d2f626c6f672f34793165632e676966
  cur 一直在往前跑 代表一次循环的每一项遍历
  pre 在后面追 
  pre cur arr 前一个，后一个 
  不等于时 pre++ cur++
  相等时 pre 不走
  如果 cur pre 不一样，那么 pre++ 值等于 cur
  从头到尾都是排好序的不重复数
  每个位置放什么数？
  pre 指针 没有跟上cur的速度，表示有重复
  pre cur 中间有n个空位
  pre+1 删除，把cur当前的值交给pre

  - 快慢指针
    1. 一次循环 cur++ 一直跑
    2. cur跟pre arr[] 不相等的话
       pre++
       相等的话
        pre不动 cur++
    3. cur再走的时候， 继续比较
       新的cur跟旧的pre 不相等时
       pre++ 并且把新的cur的数组值赋值给新的pre 把之前重复的空出来的位置给填上
    4. cur > length return 新数组长度

- 数据结构 链表
  [1, 1, 2] 链表
  LinkedList  next 
  1  1 相等 1的next指针指向1，改成指向2

  把数组要维持位置 快慢指针给干掉 更好理解