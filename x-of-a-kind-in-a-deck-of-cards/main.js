/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (!deck || deck.length === 1) return false
  let map = new Map() 
  let flag = true
  for (let i = 0; i < deck.length; i++) {
    map.set(deck[i], map.has(deck[i]) ? map.get(deck[i]) + 1 : 1) // 统计次数
  }
  for (let x = 2; x <= deck.length; x++) {
    if (deck.length % x === 0) {
      for ([key, value] of map) {
        if (value % x != 0) {
          flag = false
          break
        } else {
          flag = true
        }
      }
      if (flag) {
        break
      }
    }    
  }
  return flag
}

console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]))
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]))
console.log(hasGroupsSizeX([1,1]))
console.log(hasGroupsSizeX([1,1,2,2,2,2]))