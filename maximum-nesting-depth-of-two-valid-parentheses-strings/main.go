package main

import "fmt"

func maxDepthAfterSplit(seq string) []int {
	if len(seq) < 1 {
		return []int{1}
	}
	res := make([]int, len(seq))
	for i := range seq {
		if seq[i] == '(' {
			res[i] = i % 2
		} else {
			res[i] = 1 - i % 2
		}
	}
	return res
}

func main() {
	fmt.Println(maxDepthAfterSplit("(()())"))
	fmt.Println(maxDepthAfterSplit("()(())()"))
}
