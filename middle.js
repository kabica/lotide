//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('./assertArraysEqual');



// const eqArrays = function(arr1 , arr2) {
//   if(arr1.length !== arr2.length) return false;
//   let result = false;

//   for(let i = 0; i < arr1.length; i++) {
//     result = false;
//     if(arr1[i] === arr2[i]) {
//       result = true;
//     }
//   }
  
//   return result;
// };

// const assertArraysEqual = function(arr1, arr2) {
//   if(eqArrays(arr1, arr2)) {
//     console.log('✅ Assertion passed: Arrays are equal')
//   } else {
//     console.log('🛑 Assertion failed: arrays are different')
//   }
// };

const middle = function(array) {
  let result = [];
  const midIndexUp = Math.ceil(array.length / 2);
  const midIndexDown = Math.floor(array.length / 2);
  if(array.length === 1 || array.length === 2) {
    return result;
  }

  else if(midIndexUp === midIndexDown) {
    result.push(array[midIndexDown - 1]);
    result.push(array[midIndexDown]);
  }

  else {
    result.push(array[midIndexDown]);
  }


  return result;
};

module.exports = middle;

