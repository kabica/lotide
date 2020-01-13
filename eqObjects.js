// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arr1 , arr2) {
  // Check that arrays are of equal size -- allows for either array length to be used as for-loop max index
  if(arr1.length !== arr2.length) return false;

  // Result is false by default, and will be updated only if conditions are met 
  // Each time loop executes, result starts as false and must be updated to true 
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


let eqObj = function(obj1, obj2) {
 
  for(const index in obj1) {
    

  }
  
}



const cd = { c: "1", d: "2" };
const dc = { d: "2", c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
assertEqual(eqObj(cd, dc),true);
assertEqual(eqObj(cd, cd2),false);

