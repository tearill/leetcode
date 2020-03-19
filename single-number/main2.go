package main

import "fmt"

func singleNumber(nums []int) int {
	res := 0

	for _, n := range nums {
		res ^= n // 异或运算，相同为 0
	}
	return res
}

func main() {
	// fmt.Printf("%d", 3 ^ 5)
	fmt.Printf("%d", singleNumber([]int{ 2, 2, 1 }))
}