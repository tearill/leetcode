package main

import "fmt"

func Min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func maxArea(height []int) int {
	len := len(height)
	if len < 2 {
		return 0
	}
	leftP := 0
	rightP := len - 1
	volumn := 0
	for leftP < rightP {
		minHeight := Min(height[leftP], height[rightP])
		area := (rightP - leftP) * minHeight
		if area > volumn {
			volumn = area
		}
		// height[leftP] < height[rightP]
		if minHeight == height[leftP] {
			leftP++
		} else {
			rightP--
		}
	}
	return volumn
}

func main() {
	fmt.Println(maxArea([]int{1,8,6,2,5,4,8,3,7}))
	fmt.Println(maxArea([]int{2,3,4,5,18,17,6}))
}