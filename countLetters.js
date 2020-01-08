const countOnly = function(inputStr) {
  let result = {};
  let current = '';
  let input = inputStr.toLowerCase();
  
  for(const letter of input) {
    current = letter;
    if(letter === ' '){
      {continue;}
    }
    else if(result[current] === undefined) {
      result[current] = 1;
    }
    else if(result[current] !== undefined) {
      result[current] += 1;
    }
  }

  return result;
};







// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};



console.log(countOnly("AAAl ex"))
