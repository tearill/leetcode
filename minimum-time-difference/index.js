/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  let arr = []
  let len = timePoints.length
  for (let i = 0; i < len; i++) {
    let minute = Number(timePoints[i].substring(0, 2)) * 60 + Number(timePoints[i].substring(3, 5))
    arr.push(minute)
  }
  arr = arr.sort((a, b) => a - b)
  arr.push(arr[0] + 1440)
  let gapTime = []
  for (let j = 1; j < arr.length; j++) {
    let gap = arr[j] - arr[j - 1]
    gapTime.push(gap)
  }
  return Math.min(...gapTime)
}

console.log(findMinDifference(["23:59","00:00"]))
