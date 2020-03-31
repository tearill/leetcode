// 冒泡排序优化 1
// 可能经过一定次数的排序数组已经有序了，但是因为循环次数限制排序还会继续，要让程序排好序之后提前退出
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) { // 总共循环 arr.length - 1 轮，每轮确定一个，最后剩下的那个不用再循环
    let isSort = true // 有序标记，每一轮的初始值都是 true
    for (let j = 0; j < arr.length - i - 1; j++) { // 每一轮要找 arr.length - i - 1 次，前面 i 个元素已经排好序了
      let temp = 0 // 临时变量
      if (arr[j] > arr[j+1]) { // 交换位置
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        isSort = false // 有元素进行交换，所以不是有序的，标记变为 false
      }
    }
    if (isSort) { // 已经是有序的了
      break
    }
  }
  return arr
}

var sortArray = function(nums) {
  return bubbleSort(nums)
};

console.log(sortArray([5,2,3,1]))
console.log(sortArray([5,1,1,2,0,0]))