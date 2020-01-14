// TEST : letterPositions
const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1,2] for the index positions of the letter 'e' in word 'heelo'", () => {
    assert.deepEqual(letterPositions("heello").e, [1,2]);
  });

  it("returns [1,2,3] for the index positions of the letter 'o' in word 'gooogle'", () => {
    assert.deepEqual(letterPositions("gooogle").o, [1,2,3]);
  });

  
});




