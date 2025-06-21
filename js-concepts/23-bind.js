const person = {
  name: "Raghav",
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};

// When a method is detached from its object, this loses context unless it's explicitly bound
const greet1 = person.greet; // assigning the function itself to greet1, not bound to person
console.log(greet1()); // Hello, my name is undefined
/*
When greet() is called, it's in the global context, so this is
- undefined in strict mode
- or window in sloppy mode (where this.name is also undefined unless set)
*/

console.log(person.greet()); // Hello, my name is Raghav

const greet2 = person.greet.bind(person);
console.log(greet2()); // Hello, my name is Raghav
