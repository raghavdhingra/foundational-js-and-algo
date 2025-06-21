const obj1 = { key: "value" };
const obj2 = { key: "value" };

console.log(obj1 === obj2); // ❌ false

// In JavaScript, object comparison is by reference, not by value
// It's like having two identical-looking houses built separately — they're not the same house, even if they look the same.

/*
Compare by Value?
1. Convert to strings: JSON.stringify(obj1) === JSON.stringify(obj2) // loses functions and may break with key order
2. Or use a deep comparison utility
*/
