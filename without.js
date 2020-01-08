const eqArrays = function(arr1 , arr2) {
  console.log('IN EQARRAY: LENGTHS ARE = ' + arr1.length + ' & ' + arr2.length)
  if(arr1.length != arr2.length) return false;
  let result = false;

  for(let i = 0; i < arr1.length; i++) {
    result = false;
    if(arr1[i] === arr2[i]) {
      result = true;
    }
  }
  
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2)) {
    console.log('✅ Assertion passed: Arrays are equal')
  } else {
    console.log('🛑 Assertion failed: arrays are different')
  }
};

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


const without = function(source , remove) {
  // Create new empty array to be populated with valid inputs from source
  // Valid inputs are inputs not present in the remove array
  let result = [];
  let status = true;

  //Compare each value of source to remove array and write value to result if valid 
  for(let i = 0; i <= source.length - remove.length + 1; i++) {
    status = true;
    for(let j = 0; j < remove.length; j++) {
      if(source[i] === remove[j]) {
        status = false;
      }
    }
    if(status) {
      result.push(source[i]);
    }
    
  }
  console.log('IN WITHOUT FUNCTION: OUTPUT LENGTH = ' + result.length)
  console.log(result);
  return result;

};

console.log('TEST 1')
let tester = ['a','c','d'];
assertArraysEqual(without([1,2,3,4] , [2,3]) ,[1,4]);
console.log('\n')

console.log('TEST 2')
assertArraysEqual(without(['a','b','c','d'] , ['b']) , ['a','c','d']);
console.log('--FROM TEST: LENGTH SHOULD BE = ' + tester.length)
console.log('\n')

console.log('TEST 3')
assertArraysEqual(without([1,2,3,4,5,6] , [3,4]) ,[1,2,5,6]);