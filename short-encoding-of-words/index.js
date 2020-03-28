/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  let set = new Set(words) // 先去重
  for (let word of set) {
    // console.log(word)
    for (let i = 1; i < word.length; i++) { // 遍历取后缀判断，从 1 开始(否则会删掉整个单词)
      let chunk = word.slice(i) // 每个单词的后缀
      // console.log(chunk)
      set.has(chunk) && set.delete(chunk) // 如果后缀是列表中的某个单词，可以直接忽略
      // console.log(set)
    }
  }
  
  let res = [...set].reduce((total, value) => total + value.length + 1, 0) // 初始值 0

  return res
};

console.log(minimumLengthEncoding(["time", "me", "bell"]))