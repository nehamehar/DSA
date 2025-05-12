class Calculator {
    constructor(initialValue) {
    this.result = initialValue; // define and initialize result
  }

    add(value) {
    this.result += value;  // add to the existing result
    return this;           // return this to allow chaining
}

   subtract(value) {
    this.result -= value;  // add to the existing result
    return this;           // return this to allow chaining
}  
    multiply(value) {
        this.result *= value;  // add to the existing result
        return this; 
        
    }
    divide(value) {
    if (value === 0) {
        throw new Error("Division by zero is not allowed");
    }
    this.result /= value;  // safe to divide now
    return this;
}


    power(value) {
        this.result **= value;  // add to the existing result
        return this; 
    }
    
    getResult() {
        return this.result
        
    }
}