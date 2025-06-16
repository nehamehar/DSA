const majorityElement = (nums) => {
    let count = 0; //how many times majority number appear
    let candidate = null; // majority nuber

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]; // get the current number from the array

        if (count === 0) { // if count of majority ele is 0 
            candidate = num; // Make the current number (num) the new candidate for majority element.
        }

        count += (num === candidate) ? 1 : -1; // vote for or against candidate
    }

    return candidate;
};
