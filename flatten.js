const eqArrays = function(arr1 , arr2) {
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
    if(status && source[i] !== undefined) {
      result.push(source[i]);
    }
    
  }
  return result;

};

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


console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]) , [1,2,3,4,5,6] )
assertArraysEqual(flatten([1, 2, [3, 4 , 5 , 6], 7, [8,9]]) , [1,2,3,4,5,6,7,8,9] )