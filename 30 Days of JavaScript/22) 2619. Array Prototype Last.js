//last() when we made own method we have to use Array.prototype as it is not build-in. also it works for all array in fun
Array.prototype.last = function() {
    if(this.length === 0){ // why we use this as we don't know how much array are there so for all we use this not specific namwe
        return -1;
    }else {
        return this[this.length - 1];
    }
    
};
