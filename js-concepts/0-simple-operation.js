let x = "5"; // string
let y = 5; // number

console.log(x == y); // 👉 true => Loose equality => "5" is coerced to number 5 (Allows type coercion)
console.log(x === y); // 👉 false => Strict equality => Types differ: string ≠ number (No coercion, both type and value must match)

// SPLIT METHOD
console.log("hello".split("")); // [ 'h', 'e', 'l', 'l', 'o' ]

// FIND VS FILTER
const nums = [4, 7, 9, 12, 15];
const found = nums.find((n) => n > 10);
const filtered = nums.filter((n) => n > 10);
console.log("found:", found); // 12 => returns the first match value
console.log("filtered:", filtered); // [12, 15] => returns the list of matched values

// MAP
const map = new Map();
map.set("1", "string");
map.set(1, "number");
map.set(true, "boolean");
console.log(map.get("1")); // "string"
console.log(map.get(1)); // "number"
console.log(map.get(true)); // "boolean"
console.log(map.size); // 3
