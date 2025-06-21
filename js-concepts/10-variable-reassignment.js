let a = [1, 2, 3];
let b = a;
a = [4, 5, 6];

console.log(b); // [1,2,3] - changing a's reference — not modifying the array itself
