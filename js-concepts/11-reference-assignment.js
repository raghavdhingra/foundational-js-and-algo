let x = {};
let y = x;
x.name = "Raghav";
x = null;

console.log(y);

/*
Key Concepts:
- Objects are reference types — assigning y = x makes both point to the same object in memory.
- Updating x.name updates the object.
- Doing x = null only removes the reference from x, not from y.
- The object stays alive as long as there is at least one reference to it.
*/

let obj = { a: 1 }; // create an object
let arr = [obj]; // store reference to obj in array

obj.a = 2; // update object property via obj
obj = null; // reassign obj to null (doesn't affect arr)

console.log(arr[0]); // 👉 { a: 2 }
