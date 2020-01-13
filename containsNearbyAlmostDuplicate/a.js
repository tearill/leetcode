/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for(let i = 0, len1 = nums.length - 1; i < len1; i++) {
        for (let j = i + 1, len2 = nums.length; j < len2; j++) {
            var index = j - i;
            var minus = nums[i] > nums[j] ? nums[i] - nums[j] : nums[j] - nums[i];
            if(index <= k && minus <= t)
                return true;
        }
    }
    return false;
};

console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0));
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2));
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3));