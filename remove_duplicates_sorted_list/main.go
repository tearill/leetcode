package main

import "fmt"

func removeDuplicates(nums []int) int {
	len := len(nums)
	slowP := 0 // 慢指针
	for fastP := 1; fastP < len; fastP++ { // 快指针
		if nums[slowP] != nums[fastP] {
			slowP++ // 慢指针后移
			nums[slowP] = nums[fastP] // 中间间隔的一定是重复的元素，用快指针的值去填上空
		}
	}
	return slowP + 1
}

func main() {
	fmt.Println(removeDuplicates([]int{1, 1, 2}))
	fmt.Println(removeDuplicates([]int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}))
}