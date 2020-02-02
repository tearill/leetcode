var isValid = function (s) {
    if (!s || s.length < 1) return true; // 为空时
    var stack = [];
    var stack = []
    var map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (['(', '[', '{'].indexOf(c) != -1) {
            stack.push(c);
        } else {
            var top = stack[stack.length - 1];
            if(stack.length === 0 || map[c] != top) {
                return false;
            }else{
                stack.pop()
            }
        }
    }
    // 如果最后stack 里没有元素了， 就一定是匹配的
    return stack.length === 0;
}
console.log(isValid('{[]}'))