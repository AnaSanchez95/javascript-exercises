const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((a, b) => a + b, 0);
};

const multiply = function(array) {
 return array.reduce((a, b) => a * b, 0);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let total = 1;
  for (i = 1; i <= a; i++){
    total = a * i;
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
