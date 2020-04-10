/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
  if (!s || s.length === 0) return "";
  s = s.trim(); // 先去除两头的空格
  let i = j = s.length - 1; // 快慢指针
  let res = []; // 存放结果
  while (i >= 0) {
    while (s[i] != ' ' && i >= 0) i--; // 确定单词的左边界
    res.push(s.substring(i + 1, j + 1)); // 存放单词
    while (s[i] == ' ') i--; // 跳过单词之间的所有空格
    j = i; // 移动慢指针
  }
  return res.join(' ');
};

console.log(reverseWords(""));
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world!  "));
console.log(reverseWords("a good   example"));