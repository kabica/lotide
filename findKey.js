let data1 = {
"Blue Hill": { stars: 1 },
"Akaleri":   { stars: 3 },
"noma":      { stars: 2 },
"elBulli":   { stars: 1 },
"Ora":       { stars: 2 },
"Akelarre":  { stars: 0 }
}



const findKey = function(data, callback) {
  let result = undefined;
  let key1 = Object.keys(data);
  
  for(const item of key1){
    if(!callback(data[item].stars)) return item;
  }
  return result;
}




const results = findKey(data1, x => x );
console.log('Alex: ' + results);