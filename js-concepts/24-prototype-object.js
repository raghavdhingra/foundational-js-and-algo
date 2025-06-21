function foo() {}
foo.prototype.bar = 42;

const f1 = new foo();
const f2 = new foo();

console.log(f1.bar); // 42
console.log(f2.bar); // 42
console.log(f1.__proto__ === f2.__proto__); // true

/*
f1.bar and f2.bar:
Both f1 and f2 don’t have their own bar property.
So JS looks up the prototype chain and finds bar in foo.prototype.
✅ 42 for both

f1.__proto__ === f2.__proto__
When you do new foo(), the created object’s internal [[Prototype]] (a.k.a. __proto__) is set to foo.prototype
Since both f1 and f2 come from the same constructor, they share the same prototype

f1.__proto__ === foo.prototype  // true
f2.__proto__ === foo.prototype  // true
f1.__proto__ === f2.__proto__   // ✅ true

All instances created with the same constructor function share the same prototype object
*/
