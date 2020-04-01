package main

import "fmt"

func removeElement(nums []int, val int) int {
	len := len(nums)
	if len == 0 {
		return 0
	}
	for i := 0; i < len; {
		if nums[i] == val {
			nums[i] = nums[len-1]
			len--
		} else {
			i++
		}
	}
	return len
}

func main() {
	fmt.Println(removeElement([]int{ 3, 2, 2, 3 }, 3))
	fmt.Println(removeElement([]int{ 0, 1, 2, 2, 3, 0, 4, 2 }, 2))
}