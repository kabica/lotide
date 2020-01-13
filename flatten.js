// flatten.js
const eqArrays = require('./eqArrays');
const middle = require('./middle');
const without = require('./without');



const flatten = function(inputArr) {
  let result = [];
  for(let i = 0; i < inputArr.length; i++) {
    if(Array.isArray(inputArr[i])) {
      for(let j = 0; j < inputArr[i].length; j++) {
        result.push(inputArr[i][j])
      }
    }
    else{
      result.push(inputArr[i]);
    }
  }
  return result;
}

module.exports = flatten;

