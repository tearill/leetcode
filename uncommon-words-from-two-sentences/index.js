/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  if (!A || !B) return
  let arr1 = A.split(' ')
  let arr2 = B.split(' ')
  // return [...arr1, ...arr2]
  let map = new Map()
  let res = []
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], map.has(arr1[i]) ? map.get(arr1[i]) + 1 : 1)
  }
  for (let j = 0; j < arr2.length; j++) {
    map.set(arr2[j], map.has(arr2[j]) ? map.get(arr2[j]) + 1 : 1)    
  }
  for (const key of map.keys()) {
    // console.log(key)
    map.get(key) === 1 && res.push(key)
  }
  return res
}

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"))