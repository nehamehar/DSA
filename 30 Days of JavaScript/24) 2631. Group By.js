Array.prototype.groupBy = function(fn) {
    const grouped = {};  // An empty object to store the result
  
    // Iterate through each element in the array
    this.forEach(item => {
      // Get the key from the callback function
      const key = fn(item); //calling fn with item as we want to know thet item first's letter so we can make group
  
      // If the key doesn't exist in grouped, initialize it as an empty array
      if (!grouped[key]) {
        grouped[key] = [];
      }
  
      // Push the current item to the appropriate key's array
      grouped[key].push(item);
    });
  
    // Return the grouped object
    return grouped;
  };
  