let x = "5"; // string
let y = 5; // number

console.log(x == y); // 👉 true => Loose equality => "5" is coerced to number 5 (Allows type coercion)
console.log(x === y); // 👉 false => Strict equality => Types differ: string ≠ number (No coercion, both type and value must match)
