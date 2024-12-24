function createCounter(start){
    let count = start;
    return function (){
        return count++
    }
}


// 2) using arrow fun:
// var createCounter = (n) => {
//     return () => n++
// }


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */