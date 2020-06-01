/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  // let res = [];
  for (let i = 0; i < candies.length; i++) {
    const cur = candies[i];
    // if (cur + extraCandies >= max) res[i] = true;
    // else res[i] = false;
    candies[i] = cur + extraCandies >= max;
  }
  return candies;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
console.log(kidsWithCandies([4,2,1,1,2], 1));
console.log(kidsWithCandies([12,1,12], 10));