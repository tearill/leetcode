function convert(radix, num) {
  if (num === 0) return "0"
  let isPositive = true
  let str = ''
  if (num < 0) {
    num = -num
    isPositive = false
  }
  while(num > 0) {
    str = num % radix + str
    num = parseInt(num / radix)
  }
  // console.log(typeof +str)
  return isPositive ? +str : '-' + str
}

console.log(convert(7, 100))
console.log(convert(7, -7))
console.log(convert(32, 32))
console.log(convert(2, 10))