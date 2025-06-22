// Map and filter functions
const nums = [1, 2, 3, 4, 5];
const result = nums
  .map((n) => {
    if (n % 2 === 0) return;
    return n * 2;
  }) // [2, undefined, 6, undefined, 10]
  .filter((n) => n !== undefined); // [2, 6, 10]
// If you used .filter(Boolean) instead, it would also remove undefined, null, false, 0, "", and NaN — great for quick cleanup
console.log(result); // [2, 6, 10]

// Reduce function
const arr = [1, 2, 3];
const sum1 = arr.reduce((acc, val) => acc + val);
const sum2 = arr.reduce((acc, val) => acc + val, 0);
console.log("sum1:", sum1); // 6 => No initial value is passed => first element (1) as the initial accumulator => Then iterates from the second element onward
console.log("sum2:", sum2); // 6 => Starts from 0, includes all elements => sum is 6

[].reduce((a, b) => a + b); // ❌ TypeError: Reduce of empty array with no initial value
["1", 2, 3].reduce((a, b) => a + b); // a = '1', b = 2 → '12', then '123'
