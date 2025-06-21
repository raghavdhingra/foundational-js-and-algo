console.log(typeof NaN); // number
console.log(NaN === NaN); // false

// Usage:
const value = NaN;
Number.isNaN(value);

/*
NaN stands for "Not a Number"
its type is actually "number"
NaN is a special numeric value that represents an invalid number result

NaN === NaN =>
1. NaN is the only value in JavaScript that is not equal to itself
2. It’s part of the IEEE 754 spec, international standard for how computers represent floating-point numbers (real numbers with decimals) in binary
0.1 + 0.2        // 0.30000000000000004
NaN === NaN      // false
1 / 0            // Infinity
-1 / 0           // -Infinity

*/

isNaN("abc"); // true 😬 (not reliable)
Number.isNaN("abc"); // false ✅ (correct)
