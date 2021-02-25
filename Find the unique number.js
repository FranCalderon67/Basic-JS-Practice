/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/


const values = [2, 2, 3, 2, 2, 2, 2, 2, 2];

function findUniqueNumber(searchUniqueNum) {
  searchUniqueNum.sort();
  if (searchUniqueNum[0] != searchUniqueNum[1]) {
    let uniqueNum = searchUniqueNum[0];
  } else {
    uniqueNum = searchUniqueNum.slice(-1)[0];
  }
  return uniqueNum;
}

console.log(findUniqueNumber(values));