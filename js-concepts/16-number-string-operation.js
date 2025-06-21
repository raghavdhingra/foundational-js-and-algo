console.log(1 + "2"); // 12
console.log("2" + 1); // 21
console.log(1 - "2"); // -1
console.log("2" - 1); // 1

/*
1️⃣ + operator with a string triggers string concatenation
  1 is coerced to "1" → "1" + "2" → "12"
  Same rule — "2" + "1" → "21"

2️⃣ - operator only works with numbers, so "2" is coerced to 2
  1 - "2" → -1 => 1 - 2 → -1
  "2" - 1 → 1 => "2" → coerced to number 2 => 2 - 1 → 1


| Operator      | Behavior                                          |
| ------------- | ------------------------------------------------- |
| `+`           | If either operand is a string → **concatenation** |
| `-`, `*`, `/` | Always performs **numeric coercion**              |

*/

console.log("10" - 3); // 👉 7  (string "10" → number 10)
console.log(true - 1); // 👉 0  (true → 1)
console.log(null - 1); // 👉 -1 (null → 0)
console.log(undefined - 1); // 👉 NaN (undefined → NaN)
console.log("abc" - 1); // 👉 NaN ("abc" can’t become a number)
console.log("" - 2); // 👉 -2 ("" → 0)

// MULTIPLICATION AND DIVISION
console.log(6 * 2); // 👉 12
console.log(8 / 4); // 👉 2

console.log("6" * "2"); // 👉 12 (coerced to numbers)
console.log("12" / "4"); // 👉 3

console.log(true * 5); // 👉 5   (true → 1)
console.log(false / 2); // 👉 0   (false → 0)

console.log(null * 10); // 👉 0   (null → 0)

console.log(undefined * 2); // 👉 NaN

console.log("abc" / 3); // 👉 NaN
console.log("a" * 5); // 👉 NaN

console.log(1 / 0); // 👉 Infinity
console.log(-1 / 0); // 👉 -Infinity
console.log(0 / 0); // 👉 NaN (indeterminate)

Number("a"); // → NaN
Number("abc"); // → NaN
