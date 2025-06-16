function removeDuplicates(nums) {
    //check if array is empty return 0;
    if (nums.length === 0) {
        return 0;
    }

    let k = 1; // Initialize the count of unique elements to 1 because index=0 is always unique k = index
    //k= current value , i = loop in array
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            //[k-1] array's last index
            nums[k] = nums[i]; // Overwrite the next unique element
            k++;
        }
    }

    return k;
}