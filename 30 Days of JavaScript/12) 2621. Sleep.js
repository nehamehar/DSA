async function sleep(millis) {
    let pro = new Promise(resolve => setTimeout(() => resolve(), millis)) // also we can write here settimeout(resolve,millis) as here we don't have to pass para,value to resolve fun(resolve is arrowfun)
    //why delayresolve
    return pro;
}
