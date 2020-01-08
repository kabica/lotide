// CODE IMPLIMENTATION 
const findKeyByValue = function(myObject, myValue) {
  let keys = Object.keys(myObject);

  for(const list of keys) {
    if(myObject[list] === myValue) return list;
  }
  return undefined;
}



// TEST DRIVE ASSERTION 
const assertEqual = function(actual, expected) {


  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);