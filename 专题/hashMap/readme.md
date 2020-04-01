# HashMap  

10 万条 URL 访问日志(Log node)，按照访问次数给 URL 排序，应用场景  
如何生成备忘录？  

- 10 万条 URL 访问日志  
  输出 URL 排序，按照访问次数  
  / 3万条  
  /detail/121212 5k  
  /detail/555555 5k  
  /comment/12121 2.1k  
  output: ['/', '/detail/121212', '/detail/555555', '/comment/12121']  
  input: 日志的数组 ['/', '/', ..., '/detail/121212', ...]  

- 数据结构解决问题  
  JSON Object { } => 散列表(HashMap) 键值对  
  1. for 遍历一次 10万条 url -> key  
     value 第一次为 1，否则就 +1  
      ```js
      {
        '/': 30000,
        '/detail/121212': 5000
        ......
      }  
      ```
  2. 排序，怎么排？ value 是数值类型，一定可以排序  
     
- word 文档有单词纠错功能  
  wold 输出标红  

  单词终是有数的，常用的英文单词有20万个左右  
  word 拼写、纠错的功能，word 启动时，在内存中占用几百 MB 的内存  
  { } 20万个存成 HashMap -> key: value hello: hello  
  Dictionary | HashMap -> 时间复杂度 O(1)  
  只需要根据 key 查找  

- Hash Table 哈希表  
  key: value O(1) 时间复杂度  
  两数相加 O(n^2)  
  O(n) 形成一个 hash table  

  HashTable 访问的时间复杂度是 O(1) -> 更简单的数据结构：数组中也是 O(1)  

- 什么是散？ 
  举例：运动会有89个同学跑 100m，贴一个参赛号码 0...88  
  散开，根据参赛号码快速的区分  
  | |  
  \\/  
  数组中：根据下标区分，快速找到元素  
  O(n)：第1个位置 ... 第n个位置  
  O(1)：start(0) + 偏移量 -> 物理执行的本质：内存的地址计算  

- 散列表的概念：  
  散开，列作为下标  
  O(1) 根据 key，立马可以给结果  
  key 就是 HashMap 中的下标，key 要比数组中的下标更有意义，可以表达出更多的含义  

- HashMap 如何实现 O(1)  
  HashMap 是基于数组的  
  Array、HashMap 分开理解是错误的  

  举例：运动会，40、010140 -> 运动会在各个跑道上散开的占跑到的运动员来说是同一个概念  
  