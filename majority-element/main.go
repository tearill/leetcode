package main

import "fmt"

// []int -> 一个数组，每一项是 int 型
func majorityElement(nums []int) int { // 返回值是 int 型
	majority, count := nums[0], 1
	for i := 1; i < len(nums); i++ {
		if count == 0 {
			majority = nums[i]
		}
		if nums[i] == majority {
			count++
		} else {
			count--
		}
	}
	return majority
}

func main() {
	fmt.Println(majorityElement([]int{1, 1, 2, 2, 2, 3}))
}