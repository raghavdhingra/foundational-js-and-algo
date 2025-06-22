async function asyncFunc() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}
console.log("3");
asyncFunc();
console.log("4");

/*
Output: 3 > 1 > 4 > 2
- console.log("3") — runs first (synchronous)
- asyncFunc() is called => Logs "1" immediately => Hits await Promise.resolve() → pauses here, schedules continuation ("2") as a microtask
- console.log("4") — runs immediately after "1"
- Microtask queue runs => Resumes asyncFunc, logs "2"
*/

console.log("start");
setTimeout(() => {
  console.log("setTimeout");
}, 0);
Promise.resolve().then(() => {
  console.log("promise");
});
console.log("end");
/*
Output: start > end > promise > setTimeout

Event Loop Behavior
- Run all synchronous code
- Then flush the microtask queue (.then, await, queueMicrotask)
- Then run one macrotask from the callback queue (setTimeout, setInterval, I/O)

| Feature        | Microtask (`.then`)                | Macrotask (`setTimeout`)                |
| -------------- | ---------------------------------- | --------------------------------------- |
| Executes after | Current sync code                  | After microtasks & paint                |
| Priority       | 🟢 Higher                          | 🟡 Lower                                |
| Examples       | `.then`, `await`, `queueMicrotask` | `setTimeout`, `setInterval`, DOM events |
*/
