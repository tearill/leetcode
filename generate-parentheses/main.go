package main

import "fmt"

func dfs(left int, right int, list string, result *[]string) {
	if left == 0 && right == 0 {
		*result = append(*result, list)
		return
	}
	if left > 0 {
		dfs(left-1, right, list + "(", result)
	}
	if right > left {
		dfs(left, right-1, list + ")", result)
	}
}

func generateParenthesis(n int) []string {
	result := make([]string, 0)
	dfs(n, n, "", &result)
	return result
}

func main() {
	fmt.Println(generateParenthesis(3))
}
