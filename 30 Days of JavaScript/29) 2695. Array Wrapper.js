/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
        this.nums = nums;
};
// prototype means  Methods are stored on the prototype, meaning all instances share the same method and only one copy of the method is created. This is more memory efficient.


ArrayWrapper.prototype.valueOf = function() {  // for convert obj into num use valueOf
    return this.nums.reduce((sum, num) => sum + num, 0);
}

ArrayWrapper.prototype.toString = function() {   // if we want to make an object in string .toString use 
    return `[${this.nums.join(',')}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */