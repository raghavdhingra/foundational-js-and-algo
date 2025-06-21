function sayHi() {
  console.log(name); // undefined
  console.log(age); // ReferenceError: Cannot access 'age' before initialization
  var name = "Raghav"; // var is hoisted and initialized with undefined
  let age = 30; // let is hoisted but not initialized, It's in the Temporal Dead Zone (TDZ) until the line where it’s defined, Accessing it before initialization throws a ReferenceError
}
sayHi();

/*
🔥 Temporal Dead Zone (TDZ)
The time between when a variable is hoisted and when it’s initialized is called the TDZ — and you can’t access it there.
*/

function sayHi2() {
  var name = "Raghav";
  let age = 30;
  console.log(name); // "Raghav"
  console.log(age); // 30
}
sayHi2();
