/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    return new Set(nums).size;
    
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))