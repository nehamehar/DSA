const chunk = (arr, size) => {
    const chunkedArray = [];
  
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));  //what is happing here is slice divide the array by (i,i+size) means i and i's next index
    }
  
    return chunkedArray;
  };
  
  