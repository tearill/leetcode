/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  const canEat = function(piles, H, mid) {
    let h = 0
    for (let i = 0; i < piles.length; j++) {
      h += Math.ceil(piles[i] / mid)
    }
    return h <= H
  }
  let low = 1,
      high = Math.max(...piles)
  while(low < high) {
    let mid = Math.floor((low + high) / 2)
    canEat(piles, H, mid) ? high = mid : low = mid + 1
  }
  return low
}

console.log(minEatingSpeed([3,6,7,11], 8))
console.log(minEatingSpeed([30,11,23,4,20], 5))
console.log(minEatingSpeed([30,11,23,4,20], 6))
