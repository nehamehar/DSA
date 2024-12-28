/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {     // i and j are two index of nums 
    for(i=0; i < nums.length; i++) {       // i index in nums
        for (j = 0; j< nums.length; j++){ 
            if (i !== j){                      // i is not equal to j
                if (nums[i] + nums[j] === target){  
                    return[i, j]
                }
            }
        }
    }
};