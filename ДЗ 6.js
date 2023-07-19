
let arr = ["a", "b", "c","d","a"];
console.log ( arr.length);
const diff = arr[0] < arr[1];
const diff1 = arr[0] < arr[2];
const diff2 = arr[0] < arr[3];
const diff4 = arr[0] < arr[4];
console.log(diff,diff1,diff2,diff4);
Array.prototype.every(item => item === arr[0] )

console.log(arr);