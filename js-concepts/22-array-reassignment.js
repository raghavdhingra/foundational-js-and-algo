let a = [1, 2, 3];
let b = a;
a.length = 0;

console.log(b); // 👉 []

/*
Why?
- a and b both point to the same array in memory
- When you do a.length = 0, you’re modifying the array itself, not the reference
- This clears all elements of the array in-place
- Since b points to the same array, it sees the change too
*/

// Setting .length = 0 is a quick way to empty an array without changing its reference
