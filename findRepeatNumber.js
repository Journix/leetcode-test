// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/


// better
// 使用 set
var findRepeatNumber = function(nums) {
    let s=new Set();
    for(var i in nums){
        var curLenth=s.size;
        s.add(nums[i]);
        if(s.size==curLenth)
        return nums[i];
    }
};

// 使用对象
var findRepeatNumber = function(nums) {
    const map = {};
    for (const num of nums) {
        if (!map[num]) {
            map[num] = true;
        } else {
            return num;
        }
    }
};

// mine
var findRepeatNumber = function(nums) {
    for(let i = 0; i < nums.length; i ++) {
        for (let j = 0; j < nums.length; j ++) {
            if (i !== j && nums[i] === nums[j]) {
                return nums[i]
            }
        }
    }
};
