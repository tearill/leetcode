/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (!deck || deck.length === 1) return 0
  let map = new Map() 
  for (let i = 0; i < deck.length; i++) {
    map.set(deck[i], map.has(deck[i]) ? map.get(deck[i]) + 1 : 1) // 统计次数
  }
  // let res = new Set()
  // for(value of map.values()) {
  //   res.add(value)
  // }
  const helpFunction = (num1, num2) => {
    return num2 === 0 ? num1 : helpFunction(num2, num1 % num2)
  }
  let arr = [...map.values()]
  let res = arr[0]
  return arr.every(item => (res = helpFunction(res, item)) > 1)
}

console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]))
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]))
console.log(hasGroupsSizeX([1,1]))
console.log(hasGroupsSizeX([1,1,2,2,2,2]))