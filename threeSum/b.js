/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var number = [];
    nums.sort((a, b) => {return a - b});
    var size = nums.length; // 提前运算提高性能
    if(nums[0] <= 0 && nums[size - 1] >= 0) { // 保证有正数负数 不然无法满足计算
        var i = 0;
        while(i < size - 2) {
            if(nums[i] > 0) break; // 最左侧>0 无解
            var first = i + 1,
                last = size - 1;
            while(first < last) {
                if(nums[i] * nums[last] > 0) break; // 三个数符号相同 无解
                var sum = nums[i] + nums[first] + nums[last];
                if(sum === 0) {
                    number.push([nums[i], nums[first], nums[last]]);
                }
                if(sum <= 0) { // 和为负数 小了 first右移 或者是找到了匹配的数值 first右移查找下一个匹配项
                    while (nums[first] === nums[++first]) {} // 跳过重复值
                }else { // 和为整数 大了 last左移
                    while (nums[last] === nums[--last]) {} // 跳过重复值
                }
            }
            while (nums[i] === nums[++i]) {}
        }
    }
    return number;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
