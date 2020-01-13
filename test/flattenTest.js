// TEST : FLATTEN
const assert = require('chai').assert;
const flatten   = require('../flatten');

describe("#flatten", () => {
  it("returns [1,2,3,4,5] for input [1,2,3,4,5]", () => {
    assert.deepEqual(flatten([1,2,3,4,5]), [1,2,3,4,5]);
  });

  it("returns [1,2,3,4,5,6] for input [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
  });

  it("returns [1,2,3,4,5,6,7,8,9] for input [1, 2, [3, 4 , 5 , 6], 7, [8,9]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4 , 5 , 6], 7, [8,9]]), [1,2,3,4,5,6,7,8,9]);
  });

  
});

