function expect(val){
    return {
        toBe: function (values){// The function that will run, with expected as the value we’re comparing to
            if (val === values){return true}
            else {throw new Error ("Not Equal")}// throw new error, new error give error of object if we not put this it will give string as throw
        },
        notToBe: function (values){
            if (val !== values){return true}
            else {throw new Error ("Equal")} // here () means we have to call them when error take place so for call we use
        }
    }
}
console.log(expect())