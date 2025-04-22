var reduce = function(nums, fn, init) {
    let res = init // starts arr from initial value and updating it
    for (let i=0; i<nums.length; i++){
        res = fn(res, nums[i]) //
    }
    return res;
};
