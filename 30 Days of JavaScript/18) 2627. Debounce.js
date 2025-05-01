var debounce = function(fn, t) {
    let timer;
    return function(...args){
        clearTimeout(timer); //clearing old time
        timer = setTimeout(() => fn(...args), t) //creating new timer 
        return timer;
    }
};
//too easy feels like easy js qes not medium