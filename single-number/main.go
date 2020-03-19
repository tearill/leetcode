// package main

// import "fmt"

// func singleNumber(nums []int) int {
// 	m := make(map[int]int) // 申请空间 [int] -> key 为 int 型 || int -> value 为 int 型
// 	for _, v:= range nums {
// 		// fmt.Printf("%d\n", v)
// 		_, ok := m[v] // 检查 hashMap 中有没有相应的 key
// 		// fmt.Println(ab, ok)
// 		if (ok) { // 在 hashMap 已经存在了 -> 第二次出现了
// 			delete(m, v)
// 		} else {
// 			m[v] = 1 // 出现过
// 		}
// 	}
// 	// fmt.Println(m)
// 	for k := range m {
// 		fmt.Println(k)
// 		return k
// 	}
// 	return 0
// }

// func main() {
// 	fmt.Printf("%d", singleNumber([]int{2, 2, 1}))
// }