// eqArrays.js

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

module.exports = eqArrays;


