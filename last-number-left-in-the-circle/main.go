package main

import "fmt"

func lastRemaining(n int, m int) int {
	if n == 1 {
		return 0
	}
	res := 0
	for i := 2; i <= n; i++ {
		res = (res + m) % i
	}
	return res
}

func main() {
	fmt.Println(lastRemaining(5, 3))
}