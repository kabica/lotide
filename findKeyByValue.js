// findKeyByValue.js
const findKeyByValue = function(myObject, myValue) {
  let keys = Object.keys(myObject);

  for(const list of keys) {
    if(myObject[list] === myValue) return list;
  }
  return undefined;
};

module.exports = findKeyByValue;






