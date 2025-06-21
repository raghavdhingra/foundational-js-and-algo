typeof null; // 👉 "object"
// This is actually a long-standing bug in JavaScript (from the very first version of the language in 1995), but it was never fixed for backward compatibility

// null is a primitive — not an object
// But typeof null returns "object" due to this early design flaw

/*
typeof null      => object ❌ (bug)
typeof undefined => undefined ✅
typeof {}	       => object ✅
typeof null      => object (arrays are special kinds of objects)
*/

/*
What is a Primitive?
A primitive is a basic, immutable value in JavaScript — not an object and has no methods or properties.

They are not stored by reference, but by value

JavaScript Primitive Types:
| Type        | Example                |
| ----------- | ---------------------- |
| `string`    | `"hello"`              |
| `number`    | `42`, `3.14`, `NaN`    |
| `boolean`   | `true`, `false`        |
| `undefined` | `undefined`            |
| `null`      | `null`                 |
| `bigint`    | `1234567890123456789n` |
| `symbol`    | `Symbol("id")`         |


let a = "hello";
let b = a;
b = "world";

console.log(a); // ✅ "hello" — not affected by changing b


Compared to Non-Primitives
let obj1 = { name: "Alice" };
let obj2 = obj1;

obj2.name = "Bob";
console.log(obj1.name); // ❌ "Bob" — same reference!
*/

console.log(null instanceof Object); // 👉 false
/*
instanceof checks whether a value's prototype chain includes Object.prototype
But null has no prototype, so it's not an instance of anything
*/
