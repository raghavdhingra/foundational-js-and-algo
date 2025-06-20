/* ================== Closure ====================== */

/* A closure is a function that “remembers” the variables from its lexical scope, even after that outer function has finished executing.

In other words, a function that retains access to the variables of its parent function — even after the parent is done running.
*/

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4

// =============================================

let a = 1;
function outer() {
  let b = 2;
  function inner() {
    console.log(a, b);
  }
  return inner;
}

const fn = outer();
fn(); // 👉 logs: 1 2
/*
inner() is defined inside outer(), so it closes over the variables in outer()'s scope.
This creates a closure, which "remembers" the variables it had access to — even after outer() has finished running.
a is global, so accessible from anywhere
*/
