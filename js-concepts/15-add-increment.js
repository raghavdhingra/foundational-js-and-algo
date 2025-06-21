let a = 1;
let b = a++;

console.log(a); // 2
console.log(b); // 1
// ++ is post-increment → it returns the current value before incrementing

let x = 1;
let y = ++x;

console.log(x); // 2
console.log(y); // 2
// Because ++a increments first, then returns the updated value
