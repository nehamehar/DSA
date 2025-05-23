var once = function(fn) {
    let called = false;
    let res;
    return function(...args){
        if (!called){
            called = true;
            res = fn(...args)// as ...args is already pack for unpack we call the fun here
            return res;
            } else {
                return undefined
            }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
