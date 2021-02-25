/*
I want to know the size of the longest consecutive elements of X in Y. 
You will receive two arguments: items and key. 
Return the length of the longest segment of consecutive keys in the given items.

Notes

The items and the key will be either an integer or a string
If the key does not appear in the items, return 0
Examples

90000, 0           -->  4
"abcdaaadse", "a"  -->  3
"abcdaaadse", "z"  -->  0
*/

const b = 901000000400;
const c = "abcdaaadseaarf";

function test(x) {
  if (typeof x === "string") {
    return x.match(/(a)\1+/g);
  } else return x.toString().match(/(0)\1+/g);
}

console.log(test(b));
console.log(test(c));