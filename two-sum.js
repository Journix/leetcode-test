// https://leetcode-cn.com/problems/two-sum/

// better
var twoSum = function(nums, target) {
    var temp = [];
    for(var i=0;i<nums.length;i++){
        var dif = target - nums[i];
        if(temp[dif] != undefined){
            return [temp[dif],i];
        }
        temp[nums[i]] = i;
    }
};


// mine
var twoSum = function(nums, target) {
    for(let i = 0 ; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j ++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
