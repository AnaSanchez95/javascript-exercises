const fibonacci = function(a) {
let n1 = 1;
let n2 = 0;
let aux = 0;
let i = 1;
const fibonacciSequence = {};

while (i <= a) {        
    fibonacciSequence[i] = n1;
    aux = n1;
    n1 += n2;
    n2 = aux;
    i++;
}
if (a <= 0) {cd..
    return 'OOPS';
}
else {
    return fibonacciSequence[a];
}
};

// Do not edit below this line
module.exports = fibonacci;
