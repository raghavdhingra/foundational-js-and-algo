let x = [];
if (x) {
  console.log("truthy");
} else {
  console.log("falsy");
}
// truthy

// x = [] is an empty array, which is still a truthy value in JavaScript.
// Even though it's “empty,” it's still an object, and all non-null objects are truthy.

/*
| Value       | Truthy or Falsy        |
| ----------- | ---------------------- |
| `[]`        | ✅ truthy               |
| `{}`        | ✅ truthy               |
| `""`        | ❌ falsy (empty string) |
| `0`         | ❌ falsy                |
| `null`      | ❌ falsy                |
| `undefined` | ❌ falsy                |
| `NaN`       | ❌ falsy                |

*/

if (new Boolean(false)) {
  console.log("truthy"); // ✅ truthy
}
// Because new Boolean(false) is an object — and all objects are truthy, even if they wrap falsy values

console.log([] == false); // true => This uses loose equality (==), which triggers type coercion
/*
[] == false
→ ToPrimitive([]) → "" (empty string)
→ "" == false
→ false == false
→ ✅ true
*/
console.log([2] == false); // false
console.log([] === false); // false [] is an object, false is a boolean

/*
true statement:
1. 0 == false
2. "" == false
3. [] == false
4. undefined == null


false statement:
1. null == false // null only loosely equals undefined, not false
2. undefined == false // Same — not coercible to boolean false via ==
*/

undefined == null; // ✅ true => With loose equality (==), undefined and null are treated as equal to each other only — not to anything else
undefined === null; // ❌ false => With strict equality (===), they are not equal because they are different types

console.log([] == []); // false
console.log({} == {}); // false
// As objects are compared by references, These are two separate arrays and objects in memory → references don’t match → false
// Even if two objects (or arrays) look identical, they are not equal unless they reference the exact same object in memory

/*
| Expression   | Result  | Why                  |
| ------------ | ------- | -------------------- |
| `[] == []`   | `false` | Different references |
| `{}` == `{}` | `false` | Different references |

const a = {};
| `a == a`     | `true`  | Same reference       | 
*/
