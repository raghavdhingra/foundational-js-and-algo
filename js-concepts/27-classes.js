class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  // extends => Dog inherits from Animal, It gets access to all methods and properties of Animal
  speak() {
    // ✔️ Method Overriding
    // Dog defines its own speak(), which overrides the one in Animal
    return `${this.name} barks.`;
  }
}

const d = new Dog("Rex");
console.log(d.speak()); // 👉 "Rex barks."
// If Dog didn’t define speak(), it would fall back to Animal’s version => Rex makes a noise.

// >>>>>>. super method .<<<<<<<<<<

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls Animal's constructor => super(name) sets this.name = name using the Animal constructor
    this.breed = breed; // You must call super() in a subclass constructor before using this
  }

  speak() {
    return `${super.speak()} Loudly.`; // optionally call parent method too
  }
}

// No constructor
class Animal {
  // No constructor => Automatically gives a default contructor, constructor(...args) { }
}

// In case of no super but "this" is used
class Dog extends Animal {
  constructor(name) {
    // super() // super method must be used
    this.name = name; // ❌ ReferenceError: Must call super() before using 'this'
  }
}

/*
| Situation                           | Must call `super()`? | Why                                |
| ----------------------------------- | -------------------- | ---------------------------------- |
| Parent has no constructor           | ✅ Yes                | Still inherits default constructor |
| Child class has its own constructor | ✅ Yes                | Must call `super()` before `this`  |
| No constructor in child class       | ❌ No need            | JS handles it for you              |
*/

// In subclasses, you must always call super() inside your constructor — even if the parent has no constructor — because it links up the inheritance chain and sets up this
