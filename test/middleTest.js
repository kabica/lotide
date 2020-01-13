// TEST : middleTest.ks
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1,2,3,4,5]) , [3]);      // SHOULD PASS ASSERTION
assertArraysEqual(middle([1,2,3,4,5,6]) , [3,4]);  // SHOULD PASS ASSERTION
assertArraysEqual(middle([1,2,3,4,5,6,7]) , [4]);  // SHOULD PASS ASSERTION 

assertArraysEqual(middle([1]) , [3]);              // SHOULD FAIL ASSERTION 
assertArraysEqual(middle([1,2]) , [3]);            // SHOULD FAIL ASSERTION
assertArraysEqual(middle([1,2,3,4,5]) , [2,3,4]);  // SHOULD FAIL ASSERTION