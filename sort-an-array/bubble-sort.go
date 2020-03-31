package main 

import "fmt"  

// bubbleSort
func sortArray(nums []int) []int {
	for i := 0; i < len(nums) - 1; i++ {
		isSort := true
		for j := 0; j < len(nums) - i - 1; j++ {
			temp := 0
			if nums[j] > nums[j+1] {
				temp = nums[j]
				nums[j] = nums[j+1]
				nums[j+1] = temp
				isSort = false
			}
		}
		if isSort {
			break
		}
	}
	return nums
}

func main() {
	fmt.Println(sortArray([]int{ 5, 2, 3, 1 }))
	fmt.Println(sortArray([]int{ 5, 1, 1, 2, 0, 0 }))
}