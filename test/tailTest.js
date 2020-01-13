// TEST : tailTest.js
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello','Lighthouse','Labs']) , ['Lighthouse','Labs']);
  });

  it("returns 'Lighthouse' as first value of output for input ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello','Lighthouse','Labs'])[0] , 'Lighthouse');
  });


});



