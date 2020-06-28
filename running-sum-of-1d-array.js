// https://leetcode-cn.com/problems/running-sum-of-1d-array/

// 直接改变原数组
var runningSum = function (nums) {
    for (var i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};

// 用reduce
var runningSum = function(nums) {
    nums.reduce((prev, curr, index) => {
        nums[index] = prev + curr
        return nums[index]
    }, 0)
    return nums
};


// mine
var runningSum = function(nums) {
    let result = [];
    nums.forEach((item, index) => {
        result.push(item + (result[index - 1] || 0))
    });
    return result;
};
