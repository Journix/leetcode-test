// https://leetcode-cn.com/problems/minimum-size-subarray-sum/


// better

var minSubArrayLen = function(s, nums) {
    const int_max = Number.MAX_SAFE_INTEGER
    var i = 0, sum = 0, ans = int_max
    for (var j = 0; j < nums.length; j++) {
        sum += nums[j]
        while (sum >= s) {
            ans = Math.min(ans, j - i + 1)
            sum -= nums[i++]
        }
    }
    return ans === int_max ? 0 : ans
};


// mine
var minSubArrayLen = function(s, nums) {
        let target = 0;
        for (let i = 0; i < nums.length; i++) {
            let totalNum = nums.slice(i, nums.length).reduce((total, item, index) => {
                let newTarget = index + 1;
                if (!target || target > newTarget) {
                    if (total >= s) {
                        target = index;
                    } else if (total + item >= s) {
                        target = index + 1;
                    }
                }
              return total + item;
            }, 0)
        }
        return target;
    };
