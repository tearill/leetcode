package main

import "fmt"
// selectSort
func sortArray(nums []int) []int {
	len := len(nums)
	for i := 0; i < len - 1; i++ {
		min := i
		for j := i + 1; j < len; j++ {
			if nums[j] < nums[min] {
				min = j
			}
		}
		if min != i {
			temp := nums[min]
			nums[min] = nums[i]
			nums[i] = temp
		}
	}
	return nums
}

func main() {
	fmt.Println(sortArray([]int{ 5, 2, 3, 1 }))
	fmt.Println(sortArray([]int{ 5, 1, 1, 2, 0, 0 }))
}