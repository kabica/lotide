// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arr1 , arr2) {
  if(arr1.length !== arr2.length) return false;
  let result = false;

  for(let i = 0; i < arr1.length; i++) {
    result = false;
    if(arr1[i] === arr2[i]) {
      result = true;
    }
  }

  return result;
};
// END --------------------------------------------------------------------------- ASSERTION //


// FUNCTION IMPLIMENTATION
const eqObjects = function(object1 , object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);

  if(key1.length !== key2.length) return false;
  for(const value of key1) {
    if(Array.isArray(object1[value])) {
      console.log('entering eqArrays')
      if(!eqArrays(object1[value],object2[value])) return false;
    }
    else if(object1[value] !== object2[value]) return false;
  }

  return true;
}
// END ---------------------------------------------------------------------- IMPLIMENTATION //



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if(eqObjects(actual,expected)) {
    console.log(`✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};



assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' })

assertObjectsEqual({ a: '2', b: 2 },{ b: 2, a: '1' })

