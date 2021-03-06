const takeUntil = function(array, callback) {
  const result = [];
  for(const item of array){
    if(callback(item)) break;
    result.push(item);
  }
  return result;
}


const data1 = [0,0,0,1,0,2];
const results1 = takeUntil(data1, x => x);
console.log(results1);