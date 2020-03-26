package main

import "fmt"

func numRookCaptures(board [][]byte) int {
	count := 0
	var x int
	var y int
	var direction = [4][2]int{ {-1, 0}, {0, 1}, {1, 0}, {0, -1} }
	for i := range board {
		for j := range board[0] {
			if string(board[i][j]) == "R" {
				x = i
				y = j
				// fmt.Println(x, y, "123")
			}
		}
	}
	// fmt.Println(x, y, "123")
	for i := 0; i < 4; i++ {
		for j := 0; j < 8; j++ {
			rx := x + direction[i][0] * j
			ry := y + direction[i][1] * j
			if rx < 0 || rx >= 8 || ry < 0 || ry >= 8 || string(board[rx][ry]) == "B" { break }
			if string(board[rx][ry]) == "p" {
				count++
				break
			}
		}
	}

	return count
}

func main() {
	// fmt.Println(numRookCaptures(
	// 	[][]byte{ 
	// 	{".",".",".",".",".",".",".","."}, 
	// 	{".",".",".","p",".",".",".","."}, 
	// 	{".",".",".","R",".",".",".","p"}, 
	// 	{".",".",".",".",".",".",".","."}, 
	// 	{".",".",".",".",".",".",".","."}, 
	// 	{".",".",".","p",".",".",".","."}, 
	// 	{".",".",".",".",".",".",".","."}, 
	// 	{".",".",".",".",".",".",".","."}}))
	// fmt.Println(numRookCaptures(
	// 	[][]byte{
	// 		{".",".",".",".",".",".",".","."},
	// 		{".","p","p","p","p","p",".","."},
	// 		{".","p","p","B","p","p",".","."},
	// 		{".","p","B","R","B","p",".","."},
	// 		{".","p","p","B","p","p",".","."},
	// 		{".","p","p","p","p","p",".","."},
	// 		{".",".",".",".",".",".",".","."},
	// 		{".",".",".",".",".",".",".","."}}))
}