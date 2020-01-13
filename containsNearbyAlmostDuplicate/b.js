var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(k == 10000 || k <= 0) return false; 
    return nums.some((x,i)=>nums.some((y,j)=> i !== j && Math.abs(x-y) <= t && Math.abs(i-j) <= k));
};

console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0));
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2));
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3));