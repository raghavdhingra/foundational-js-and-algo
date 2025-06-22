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

function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  return `Hello, I'm ${this.name}`;
};
const p1 = new Person("Raghav");
Person.prototype.sayHello = function () {
  return `Hi, my name is ${this.name}`;
};
console.log(p1.sayHello()); // Hi, my name is Raghav
const p2 = new Person("Dhingra");
console.log(p2.sayHello()); // Hi, my name is Dhingra
/*
- Both p1 and p2 share the same prototype
- Even though p1 was created before the prototype was updated, it doesn't get a copy of sayHello — it just keeps a reference to the prototype chain
*/
