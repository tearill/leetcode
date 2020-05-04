package main

import "fmt"

func Max(a int, b int) int {
	if a > b { 
		return a
	}
	return b
}

func jump(nums []int) int {
	len := len(nums)
	if len == 0 { return 0 }
	max := 0
	step := 0
	end := 0
	for i := 0; i < len - 1; i++ {
		max = Max(max, i + nums[i])
		if i == end {
			end = max
			step++
		}
	}
	return step
}

func main() {
	fmt.Println(jump([]int{2,3,1,1,4}))
}