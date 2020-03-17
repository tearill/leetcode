package main

import "fmt" // 打印

func twoSum(nums []int, target int) []int {
	// go 定义一个 hashMap 
	h := make(map[int]int) // 申请一个 hashMap 地址
	// 遍历 O(n)
	for i, value := range nums {
		// fmt.Println(i, value)
		if wanted, ok := h[value]; ok {
			// fmt.Println(wanted, ok)
			return []int{wanted, i}
		} else {
			h[target-value] = i // 当前值想要的对象为 i
		}
	}
	return nil
}

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
}