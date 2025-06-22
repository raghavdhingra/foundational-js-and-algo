// Private and Public Field ========================================================
class Counter {
  #private_count = 0; // ✅ Private field
  public_count = 0; // Pulbic field

  increment() {
    this.#private_count++;
    this.public_count++;
    console.log("Incremented:", this.#private_count);
  }

  getCount() {
    // For accessing private field
    return this.#private_count;
  }
}

const c = new Counter();
c.increment(); // 👉 logs: Incremented: 1
console.log(c.getCount()); // 👉 logs: 1 => Accessing private field
console.log(c.public_count); // logs 1
console.log(c.#private_count); // ❌ SyntaxError: Private field '#count' must be declared in an enclosing class

// Static field ========================================================
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const utils = new MathUtils();

console.log(utils.add(2, 3)); // ❌ TypeError => add() is a static method, it's attached to the class itself, not to instances, So utils.add is undefined => TypeError: utils.add is not a function
console.log(utils.multiply(2, 3)); // ✅ 6 => multiply() is a regular instance method, attached to each object, utils is an instance → this call is valid
console.log(MathUtils.add(4, 5)); // ✅ 9 => Static methods are called on the class, not on instances
console.log(MathUtils.multiply(4, 5)); // ❌ TypeError => multiply is not a static method — it's only available on instances, TypeError: MathUtils.multiply is not a function

/*
| Call                    | Works? | Why                              |
| ----------------------- | ------ | -------------------------------- |
| `utils.add(…)`          | ❌      | `add` is static, not on instance |
| `utils.multiply(…)`     | ✅      | Instance method                  |
| `MathUtils.add(…)`      | ✅      | Static method                    |
| `MathUtils.multiply(…)` | ❌      | `multiply` is not static         |
*/

/// Static and instances ========================================================
class Counter {
  static total = 0;
  count = 0;

  increment() {
    this.count++;
    Counter.total++;
  }
}

const a = new Counter();
const b = new Counter();

a.increment();
a.increment();
b.increment();

console.log("a.count:", a.count); // 2
console.log("b.count:", b.count); // 1
console.log("Counter.total:", Counter.total); // 3
console.log("a.total:", a.total); // undefined

/*
- a.count: 2, simply incremented by 2 as double increment method call
- b.count: 1, as 1 time called increment method
- Counter.total = 3, as counter is main class and reference for total is added to a and b and increment method is called 3 times irrespective of different instances
- a.total is undefined // as static method are only linked to the parent class not instances

GPT Explain
- Counter.total is shared — every time increment() is called, it increases for everyone
- this.count is local to each object (a, b)
- a.total is ❌ undefined because static properties don’t exist on instances

| Field          | Defined As         | Accessed Through          | Shared?                       |
| -------------- | ------------------ | ------------------------- | ----------------------------- |
| `static total` | `static total = 0` | `Counter.total`           | ✅ Shared across all instances |
| `count`        | `count = 0`        | `this.count` per instance | ❌ Separate per instance       |
*/

// Class inheritence ========================================================
class Person {
  constructor(name) {
    this.name = name;
    console.log("Person constructor");
  }

  greet() {
    return `Hello, I’m ${this.name}`;
  }
}

class Developer extends Person {
  constructor(name, language) {
    super(name); // 🔹 Calls parent constructor
    this.language = language;
    console.log("Developer constructor");
  }

  greet() {
    return `${super.greet()} and I code in ${this.language}`;
  }
}

const dev = new Developer("Raghav", "JavaScript");
console.log(dev.greet());

/*
Logs/Output =>
Person constructor
Developer constructor
Hello, I’m Raghav and I code in JavaScript

- super(name) invokes the parent’s constructor => Logs "Person constructor"
- continues the Developer constructor => Logs "Developer constructor"
- super.greet() calls the parent class's method => "Hello, I’m Raghav"
- Final log => Hello, I’m Raghav and I code in JavaScript
*/
