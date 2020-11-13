/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity; // 最大容量
  this.cache = Object.create(null);
  this.keys = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key]) { // 获取并刷新缓存
    remove(this.keys, key); // 移除 key
    this.keys.push(key); // 将 key 放到最后
    return this.cache[key];
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) { // 如果存在就刷新缓存，并把要放进去的变成最新的
    this.cache[key] = value;
    remove(this.key, key);
    this.keys.push(key);
  } else { // 不存在就添加
    this.cache[key] = value;
    this.keys.push(key);
    if (this.keys.length > this.capacity) { // 超过最大缓存数量，删除缓存中的第一个
      // this.keys.splice(0, 1);
      // this.cache[key] = null;
      removeCache(this.cache, this.keys, this.keys[0]);
    }
  }
};

// 移除 key
function remove(arr, key) {
  if (arr.length) {
    const index = arr.indexOf(key);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

// 移除缓存中的 key
function removeCache(cache, keys, key) {
  cache[key] = null;
  remove(keys, key);
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
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