const sumAll = function(num1, num2) {
    let sum = 0;
      
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    else if (num1 <= num2) {
        
    }

    else if (num2 > num1) {
        const aux = num1;
        num2 = num1;
        num1 = aux; 
    }
    
    for (i = num1; i <= num2; i++){
        sum += i;
    }
    return sum;
    

};

// Do not edit below this line
module.exports = sumAll;
