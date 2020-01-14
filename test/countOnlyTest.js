// TEST : countOnly
const assert = require('chai').assert;
const countOnly   = require('../countOnly');



describe("#countOnly", () => {
  it("returns '1' for occurance count of particular name in input", () => {
  	const firstNames = [
	  "Karl",
	  "Salima",
	  "Agouhanna",
	  "Fang",
	  "Kavith",
	  "Jason",
	  "Salima",
	  "Fang",
	  "Joe"
	];
	const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

    assert.equal(result["Jason"], 1);
  });

 

  
});

