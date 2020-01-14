// TEST : findKeyByValue
const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns key 'drama' for input object mtaching that key with value 'The Wire'", () => {
  	const bestTVShowsByGenre = { 
	  sci_fi: "The Expanse",
	  comedy: "Brooklyn Nine-Nine",
	  drama:  "The Wire"
	};
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined when no key matches the input value", () => {
  	const bestTVShowsByGenre = { 
	  sci_fi: "The Expanse",
	  comedy: "Brooklyn Nine-Nine",
	  drama:  "The Wire"
	};
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  

  
});








