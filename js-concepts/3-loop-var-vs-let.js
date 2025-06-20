/* =============== var vs let scope ====================== */

// 1️⃣
console.log(">>>. var .<<<");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
/* 
Will print 3,3,3 after a delay, Why? Because
var is function-scoped, not block-scoped.
So there's only one i shared across all iterations.
When the setTimeout callback runs after 1 second, the loop has already completed, and i is now 3.
Each arrow function logs that same final value of i.
*/

setTimeout(() => {
  console.log(">>>. let .<<<");
}, 1500);

// 2️⃣
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 2000); // ✅ prints 0, 1, 2
}
// Because let is block-scoped, each iteration gets its own copy of i.

// 3️⃣ Use IIFE => Immediately invoked function expression => (function () {})();
// for (var i = 0; i < 3; i++) {
//   (function(j) {
//     setTimeout(() => console.log(j), 1000);
//   })(i);
// }

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Output => 3 3 3 with delay of 0s 1s 2s => var is function-scoped, so there's only one i shared across all iterations
// By the time the callbacks execute, the loop has already completed, and i === 3, All 3 setTimeout functions log the same reference to i

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Output => 0 1 2 with delay of 0s 1s 2s => let is block-scoped, and a new i is created per iteration
// Each setTimeout captures a different i value via closure

for (var i = 0; i < 3; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(n);
    }, n * 1000);
  })(i);
}
