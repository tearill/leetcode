function singleNumber(nums) {
    let sign = 0;
    for (let i = 0; i < nums.length; i++) {
        sign ^= nums[i];
    }
    let n = 1;
    let res = [0, 0];
    while ((n & sign) === 0) {
        n <<= 1;//左移一位
    }
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & n) === 0) {
            res[0] ^= nums[i];
        } else {
            res[1] ^= nums[i];
        }
    }
    return res;
}

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
