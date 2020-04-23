/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
  let count_25 = Math.floor(n/25)
  let count = 0
  for (count_25; count_25 >=0; count_25--) {
    let count_10 = Math.floor((n - 25 * count_25) / 10)
    for (count_10; count_10 >= 0; count_10--) {
      let count_5 = Math.floor((n - 25 * count_25 - 10 * count_10) / 5)
      count = count + count_5 + 1
    }
  }
  return count % 1000000007
}

console.log(waysToChange(5))
console.log(waysToChange(10))