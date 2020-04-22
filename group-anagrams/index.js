/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  if (!strs || strs.length === 0) return [];
  let map = new Map();
  let res = [];
  
  for (const str of strs) {
    const characters = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      const ASCII = str.charCodeAt(i) - 97;
      characters[ASCII]++;
    }
    let key = characters.join('');
    if (map.has(key)) {
      map.set(key, [...map.get(key), str]); // 如果已经有对应的 ASCII 值，直接追加
    } else {
      map.set(key, [str]);
    }
  }
  // console.log(map);
  for (const item of map) {
    // console.log(item, '---');
    res.push(item[1]);
  }
  return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]))

// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]