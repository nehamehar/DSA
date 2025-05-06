var sortBy = function(arr, fn) {
    let sortedArr = arr.sort((a, b) => fn(a) - fn(b));  //arr.sort((a, b) => fn(a) - fn(b)) is cmparison fun to sort the array if it return with fn only, if not then without fn we can also compare
    return sortedArr;  // (a,b ) are parameter that telling .sort method that we are passing a and b and fun are "fn(a) - fn(b)"
};