package main

import "fmt"

func Max(a int, b int) int {
	if (a > b) {
		return a
	} else {
		return b
	}
}

func canJump(nums []int) bool {
	len := len(nums)
	// fmt.Println(len)
	if len == 0 { return false }
	if len == 1 { return true }
	max := 0
	for i := 0; i < len; i++ {
		if i > max { return false }
		max = Max(max, nums[i] + i)
	}
	return true
}

func main() {
	fmt.Println(canJump([]int{2,3,1,1,4}))
	fmt.Println(canJump([]int{3,2,1,0,4}))
	fmt.Println(canJump([]int{2, 0}))
}