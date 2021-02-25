//In this simple assignment you are given a number and //have to make it negative. But maybe the number is
 //already negative?


const a = 7;
const x = -1;
const y = -5;
const z = 0;

function makeNegative(x)  {
  return x * -1;
}

console.log(a > 0 ? makeNegative(a) : a);
console.log(x > 0 ? makeNegative(x) : x);
console.log(y > 0 ? makeNegative(y) : y);
console.log(z > 0 ? makeNegative(z) : z);