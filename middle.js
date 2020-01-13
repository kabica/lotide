// middle.js

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

module.exports = middle;

