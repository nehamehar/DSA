var join = function(arr1, arr2) {
    const result = {};
    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i].id] = arr1[i];  // arr1[i].id = give object's id, arr1[i]= object
    } 
    for (let i = 0; i < arr2.length; i++) {
        if (result[arr2[i].id]) {//itteriate over result to check
            for (const key in arr2[i]) result[arr2[i].id][key] = arr2[i][key];  //comparing with result to arr2 taking key value of arr2 to result
        } else {
            result[arr2[i].id] = arr2[i];
        }
    } 

    return Object.values(result);
};