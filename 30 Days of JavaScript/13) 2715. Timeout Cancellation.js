const cancellable = function(fn, args, t) {
    const timer = setTimeout(()=>{
    fn(...args)}, t);
    // cancelFn function//
    const cancelFn = function (){
    clearTimeout(timer);
    };
    return cancelFn ;
};