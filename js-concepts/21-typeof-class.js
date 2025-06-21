console.log(typeof function () {}); // 👉 "function" => Obvious — functions are first-class citizens in JS and have their own type

console.log(typeof class MyClass {}); // 👉 "function" => Although classes are part of object-oriented design, under the hood they are special types of functions. A class in JS is just syntactic sugar over constructor functions.
// So typeof MyClass returns "function", not "object".

console.log(typeof new MyClass()); // 👉 "object"
// The class definition is a function, but an instance of the class is an object
