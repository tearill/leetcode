/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  if (!s || s.length === 0) return 0
  let len = s.length
  let state = new Array(32)
  let cur = 0, ans = 0
  state[0] = -1
  for (let i = 0; i < len; i++) {
    switch (s[i]) {
      case 'a':
        cur ^= 1;
        break;
      case 'e':
        cur ^= 2;
        break;
      case 'i':
        cur ^= 4;
        break;
      case 'o':
        cur ^= 8;
        break;
      case 'u':
        cur ^= 16;
        break;
      default:
        break;
    }
    if (state[cur] === undefined) {
      state[cur] = i
    } else {
      ans = Math.max(ans, i - state[cur])
    }
  }
  return ans
}

console.log(findTheLongestSubstring('eleetminicoworoep'))
console.log(findTheLongestSubstring('leetcodeisgreat'))
console.log(findTheLongestSubstring('bcbcbc'))
