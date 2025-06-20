/* =============== Lexical scope for arrow function ====================== */
// // this.a = 20; // If this.a is defined, then obj.b() will give 20
let obj = {
  a: 10,
  b: () => {
    console.log(this.a);
  },
  c: function () {
    console.log(this.a);
  },
};

obj.b(); // undefined => b is defined as an arrow function and arrow functions do not have their own this. Instead, they capture this from the surrounding lexical scope — which, in this case, is likely the global scope (outside obj)
obj.c(); // 10

// ===========================================================================

// function outer() {
//   this.name = "Outer";
//   // For strict mode, this is undefined under functional block, lexical scope

//   function regular() {
//     console.log(this.name); // Dynamic 'this'
//   }

//   regular(); // ❌ undefined in strict mode, or window.name
// }

// outer();

const obj1 = {
  message: "Hello!",
  getMessage() {
    const arrow = () => this.message;
    return arrow();
  },
};

console.log(obj1.getMessage()); // "Hello!"

/*
this.message → obj1.message → "Hello!"

arrow functions use lexical this, but in this case:
The arrow function is defined inside getMessage(), which is a regular method.
When obj.getMessage() is called, this inside getMessage() refers to obj.
Because arrow is defined inside that function, its this is also obj

| Concept                  | Value                            |
| ------------------------ | -------------------------------- |
| `this` in `getMessage()` | `obj`                            |
| `this` in `arrow()`      | same as enclosing `this` → `obj` |
| Result                   | `"Hello!"`                       |

*/
