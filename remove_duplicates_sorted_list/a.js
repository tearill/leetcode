/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const size = nums.length; // 原来数组的长度 提前做计算可以进行优化
    let slowP = 0; // 慢指针
    for(let fastP = 0; fastP < size; fastP++) { // 快指针
        // console.log(nums[fastP]);
        if(nums[fastP] !== nums[slowP]) { // 从同一个位置0开始
            slowP++; // 不一样的情况下
            // slowP 挪窝了，说明有新的位置要确立新的数，cur 指向的数
            nums[slowP] = nums[fastP]; // 设置每个位置，不重复的数
        }
    }
    return slowP + 1; // slowP 停下来的地方
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))