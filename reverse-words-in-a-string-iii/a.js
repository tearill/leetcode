var reverseWords = function(s) {
    return s.split('').reverse().join('').split(' ').reverse().join(' ')
};

console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"