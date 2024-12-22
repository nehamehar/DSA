var minimumOperations = function(nums) {
    let operation = 0;
    while (nums.length > 0){
        let newNum = new Set(nums); //using set to remove duplicate number in array
        if (newNum.size === nums.length){  //if it is equal give a distinct values
            break;
        } 
        else nums.splice(0,3);
        operation++;
    }
    return operation;
};