const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) { // 总共循环 arr.length - 1 轮，每轮确定一个，最后剩下的那个不用再循环
    for (let j = 0; j < arr.length - i - 1; j++) { // 每一轮要找 arr.length - i - 1 次，后面 i 个元素已经排好序了
      let temp = 0 // 临时变量
      if (arr[j] > arr[j+1]) { // 交换位置
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

var sortArray = function(nums) {
  return bubbleSort(nums)
};

console.log(sortArray([5,2,3,1]))
console.log(sortArray([5,1,1,2,0,0]))