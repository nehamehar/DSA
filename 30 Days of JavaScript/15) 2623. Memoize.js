function memoize(fn) {
    let cache = {};
    return function(...args){
    let key = JSON.stringify(args) // for making argument in string 
    if(key in cache){ //checking if the key is in cache object or not
    return cache[key]
    } 
    const result = fn.apply(this,args); // if not giving original fn with .apply()
    cache[key] = result; //put result as key in cache object
    return result       
    }
}
