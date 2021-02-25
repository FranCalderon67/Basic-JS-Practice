/*
Given two integers a and b, which can be positive or negative,
find the sum of all the integers between including them too and return it.
If the two numbers are equal return a or b.
Note: a and b are not ordered!

Examples

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

const equalArray = [1, 1, 1,]

function range(start, end){
  let arrayFran = [];

  for(let i = start; i <= end; i++){
    arrayFran.push(i);
  }
  return arrayFran;
}

let arrayFran = range (-3, 6);

console.log (arrayFran);

function reduction  (accum, current) { 
  
  if (accum != current){
  accum + current;
}else {
  console.log(accum)

}
return accum + current
}

let sumFran = arrayFran.reduce(reduction);

console.log (sumFran);

let sumFran2 = equalArray.reduce(reduction);