const selectSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i // 初始化最小值为未排序元素中的第一个
    for (let j = i + 1; j < arr.length; j++) { // 从当前元素的后一个元素开始查找
      if (arr[j] < arr[min]) { // 打擂找到最小值下标
        min = j
      }
    }
    if (min != i) { // 最小值变化了就要进行交换
      let temp = arr[min]
      arr[min] = arr[i]
      arr[i] = temp
    }
  }
  return arr
}

var sortArray = function(nums) {
  return selectSort(nums)
};

console.log(sortArray([5,2,3,1]))
console.log(sortArray([5,1,1,2,0,0]))