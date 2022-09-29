const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(ara) {
	let holdAnw = 0;
  for (let i in ara){
    holdAnw += ara[i];
  };
  return holdAnw;
};

const multiply = function(ara) {
  let holdAnw = 1;
  for (let i = 0; i < ara.length; i++){
    holdAnw = holdAnw * ara[i];
  };
  return holdAnw;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a < 0) {
    retrun -1;
  } else if (a == 0){
    return 1;
  } else {
    return (a * factorial(a - 1))
  }
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
