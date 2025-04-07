function createHelloWorld(){
    return function (){
        return "Hello World"
    }
}
let f = createHelloWorld()// This calls createHelloWorld and returns the inner function
console.log(f())        // Now this calls the inner function and returns "Hello World"
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */