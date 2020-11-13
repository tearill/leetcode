function LRUCache(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
}

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) { // 如果缓存中有就获取并刷新缓存顺序
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  return -1;
}

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) { // 已经在缓存中，刷新缓存，并把要放进去的变成最新的
    this.cache.delete(key);
    this.cache.set(key, value);
  } else { // 不存在就添加
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}

let cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4));       // 返回  4