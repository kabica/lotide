const letterPositions = function(sentence) {
  let current = '';
  const result = {};
  
  for(let i = 0; i < sentence.length; i++) {
    current = sentence[i];
    if(current === ' ') {continue;}

    else if(result[current] === undefined) {
      result[current] = [];
      result[current].push(i);
    }
    
    else result[current].push(i);
  }

  return result;
};

module.exports = letterPositions;




// const assertArraysEqual = function(arr1, arr2) {
//   if(eqArrays(arr1, arr2)) {
//     console.log('✅ Assertion passed: Arrays are equal')
//   } else {
//     console.log('🛑 Assertion failed: arrays are different')
//   }
// };

// const eqArrays = function(arr1 , arr2) {
//   // Check that arrays are of equal size -- allows for either array length to be used as for-loop max index
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



