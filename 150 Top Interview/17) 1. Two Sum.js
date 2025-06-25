var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i<nums.length; i++){
        let num = nums[i]
        const complement = target-num
        if (map.has(complement)){
            return [map.get(complement), i]
        }else{
             map.set(num,i)
        }
    }
    return []
};