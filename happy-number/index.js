/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true
  let map = new Map()
  while (n !== 1) {
    if (map.has(n)) return false
    map.set(n, true)
    n = String(n).split('').map(num => num ** 2).reduce((acc, cur) => acc + cur) // 每位之和
  }
  return true
}

console.log(isHappy(19))
console.log(isHappy(7))
console.log(isHappy(1))
console.log(isHappy(0))
