package main

import "fmt"

func Max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

func canJump(nums []int) bool {
	len := len(nums)
	if len == 0 { return false }
	if len == 1 { return true }
	rightMax := 0
	for i := 0; i < len; i++ {
		if i <= rightMax {
			rightMax = Max(rightMax, i + nums[i])
			if rightMax >= len - 1 {
				return true
			}
		}
	}
	return false
}

func main() {
	fmt.Println(canJump([]int{2,3,1,1,4}))
	fmt.Println(canJump([]int{3,2,1,0,4}))
	fmt.Println(canJump([]int{2, 0}))
}