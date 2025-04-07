function createCounter(n){
    return function counter(){
        return n++
    }
}
let f = createCounter()
console.log(f())