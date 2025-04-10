let map = function(arr, fn) {   // fn is rule we are passing in fun for array
    const transformedArr = [];
    for (let i = 0; i < arr.length; i++) {
      transformedArr[i] = fn(arr[i], i);
    }
    return transformedArr;
  };  