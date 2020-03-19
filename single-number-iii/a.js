/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var res = [];
    var arr = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        if(arr[nums[i]] !== undefined) {
            arr[nums[i]]++;
        }else {
            arr[nums[i]] = 1;
        }
    }
    Object.keys(arr).map(item => {
        if(arr[item] === 1) {
            res.push(item);
        }
    });
    return res;
};
 
console.log(singleNumber([1,2,1,3,2,5]));