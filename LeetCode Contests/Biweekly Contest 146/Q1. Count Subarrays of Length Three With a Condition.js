var countSubarrays = function(nums) {
    let count = 0
    for (let i = 0 ;i <= nums.length - 2; i++){  // length of an subarray
        first = nums[i];
        second = nums[i+1];
        third = nums[i+2];
        if (third + first === second/2){
            count++;
        }
    }
    return count;
};