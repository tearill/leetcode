function singleNumber(nums) {
    var map = new Map();
    var res = [];
    nums.forEach(item => {
        map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
    });
    map.forEach((val, item) => {
        val === 1 ? res.push(item) : '';
    })
    return res;
}

console.log(singleNumber([1,2,1,3,2,5]));