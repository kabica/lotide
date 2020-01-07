// Function that asserts similarity between two arrays
// Rather than comparing the boolean output of eqArrays to an 'expected' boolean, 
// the console.log calls are conditionally executed based on the boolean output of 
// of the eqArrays function. The output is dependent on the boolean true or false 
// output and not on the comparison of two bollean values. 

const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2)) {
    console.log('✅ Assertion passed: Arrays are equal')
  } else {
    console.log('🛑 Assertion failed: arrays are different')
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


// TEST FUNCTION 
assertArraysEqual([1,2,3] , [1,2,3]); // => should PASS