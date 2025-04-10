function createCounter(init){
    let inIT = init
    return {
        increment: function () {
      return inIT+=1;
    },
    reset: function () {
      inIT = init;
      return inIT;
    },
    decrement: function () {
      return --inIT;
    }
}
}
console.log (createCounter()); //