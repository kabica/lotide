// assertArraysEqual.js

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2)) {
    console.log('✅ Assertion passed: Arrays are equal')
  } else {
    console.log('🛑 Assertion failed: arrays are different')
  }
};


module.exports = assertArraysEqual;




