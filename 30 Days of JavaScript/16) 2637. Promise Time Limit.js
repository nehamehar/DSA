var timeLimit = function(fn, t) {
	return async function(...args) {
        const originalFnPromise = fn(...args);   // resolve the promise  When you call an async function, like fn(...args), it automatically returns a Promise — even if you don't write resolve.
        //rejected promise 
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t);
        })
//We use Promise.race because we need to run two things at the same time: whichever one finishes first.
        return Promise.race([originalFnPromise, timeoutPromise]);
    }
};