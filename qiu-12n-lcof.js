// https://leetcode-cn.com/problems/qiu-12n-lcof/

// 其他一行解法

// 用对数的方式 - 厉害了
var sumNums = function (n) {
    return Math.round(Math.exp(Math.log(n) + Math.log(n + 1) - Math.log(2)));
};

// 递归，但是这个方式好像不好，因为可能会造成栈溢出
var sumNums = function(n) {
    return n && sumNums(n - 1) + n;
};

// 幂运算加移位
var sumNums = function (n) {
    return (n ** 2 + n) >> 1;
};

// reduce 其实是遍历，不太符合题意
var sumNums = function(n) {
    return new Array(n).fill(0).reduce((sum, v, i) => sum + i, n);
};


// mine
var sumNums = function(n) {
    return add(n)
};

function add(n, total=0) {
    return n >= 1 && add(n-1, n + total) || total
}
