/*
There is an array. All elements are the same except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 4, 4, 'foo', 4 ]) === 'foo'
It’s guaranteed that array contains more than 3 elements. Array may contain anything (including NaN).
*/

const testValues = [1, 1, 1, 2, 1, 1];
const sampleValues = [ 4, 4, 'foo', 4 ]

function uniqueValue (unique){
  unique.sort();
  if (unique[0] != unique[1]){
    var newValue = unique[0]
  }else{
    newValue = unique.slice(-1)[0]
  }
  return newValue
};

console.log(uniqueValue(testValues));
console.log (uniqueValue(sampleValues));