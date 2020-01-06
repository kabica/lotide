const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

let head = function(array) {
  if(array.length === 0){
    return undefined;
  }

  let result = array[0];
  return result;
};

