let arr = [1, 2, 3];
arr[10] = 99;

console.log(arr.length); // 11
console.log(arr); // 👉 [1, 2, 3, <7 empty items>, 99]

/*
Arrays in JavaScript are objects, and their keys are numeric
When you do arr[10] = 99, you're creating a value at index 10
Array length is automatically updated to be lastIndex + 1, so
Indices 3 to 9 are now empty slots, not undefined
*/

console.log(arr[4]); // undefined ✅
arr.hasOwnProperty(4); // false ❌
