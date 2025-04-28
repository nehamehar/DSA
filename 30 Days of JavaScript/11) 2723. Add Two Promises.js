var addTwoPromises = async function(promise1, promise2) {
    let [one,two] = await Promise.all([promise1, promise2]);
    return one+two;
};
