function promiseAll(functions) {
    return new Promise((resolve, reject) => {
      const results = [];  //array result resolve
      let completed = 0; //how many promises
      const total = functions.length; //total no. of fun/promises in array for comparison with results
  
      functions.forEach((fn, index) => {
        // Call the async function
        fn().then(result => {
            results[index] = result; // Store result in correct order
            completed++;
  
            // If all functions have completed, resolve the final promise
            if (completed === total) {
              resolve(results);
            }
          })
          .catch(err => {
            // If any promise fails, reject immediately
            reject(err);
          });
      });
  
      // Handle empty input edge case
      if (total === 0) {
        resolve([]);
      }
    });
  }
  