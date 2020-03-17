// 两数之和  
// 形成散列表
let arr = new Array(90) // 数组 O(1) 下标查找  
arr[40] = '13.23' // 散开的坑位上查到物理地址
// start + 40*每个的偏移量 -> O(1) &address
let studentObj = {}
studentObj['030340'] = "13.23"
