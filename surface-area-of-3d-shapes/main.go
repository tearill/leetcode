package main

import "fmt"

func min(i, j int) int {
	if i < j {
		return i
	}
	return j
}

func surfaceArea(grid [][]int) int { // 二维数组，每个元素是 int 型，返回 int 型
	area := 0
	for i := range grid {
		for j := range grid[i] {
			if grid[i][j] > 0 {
				area += grid[i][j] * 4 + 2
			}
			if i > 0 {
				area -= min(grid[i][j], grid[i-1][j]) * 2 // 行相邻
			}
			if j > 0 {
				area -= min(grid[i][j], grid[i][j-1]) * 2 // 列相邻
			}
		}
	}
	return area
}

func main() {
	// [[1,2],[3,4]]
	fmt.Println(surfaceArea([][]int{ {1, 2}, {3, 4} }))
}