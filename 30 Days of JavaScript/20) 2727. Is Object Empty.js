var isEmpty = function(obj) {
    if (Object.keys(obj).length === 0){   //changing objects's key into array(object.key) to apply length meth to an array
       return true;
   }else{ 
       return false
   }
   
};