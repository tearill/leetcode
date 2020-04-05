package main

import "fmt"

func sortArrayByParity(A []int) []int {
	len := len(A)
	if A == nil || len == 0 {
		return nil
	}
	for left, right := 0, len - 1; left < right; {
		if A[left] % 2 == 0 {
			left++
		} else {
			// temp := A[left]
			// A[left] = A[right]
			// A[right] = temp
			A[left], A[right] = A[right], A[left]
			right--
		}
	}
	return A
}

func main() {
	fmt.Println(sortArrayByParity([]int{3,1,2,4}))
}