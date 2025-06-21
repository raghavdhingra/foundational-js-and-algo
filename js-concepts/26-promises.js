const promise = new Promise((resolve, reject) => {
  console.log("Promise started");
  resolve("Success");
  console.log("Promise resolved");
});

promise.then((res) => {
  console.log("Then:", res);
});

console.log("After promise");

/*
Promise started
Promise resolved
After promise
Then: Success

JavaScript is single-threaded and uses the event loop for asynchronous tasks

"Promise started" → logged immediately during Promise executor.
resolve("Success") → registers resolution, but .then() callback goes to the microtask queue.
"Promise resolved" → logged next — still synchronous.
"After promise" → logged immediately after the main sync code.
Then: "Then: Success" → runs after the synchronous stack is clear, via microtask queue.

.then() callbacks always run asynchronously, even if the promise is already resolved.
*/

Promise.resolve(1) // Starts the chain with a resolved value of 1
  .then((val) => {
    console.log("First then:", val); // 👉 logs 1
    return val + 1; // returns 2
  })
  .then((val) => {
    console.log("Second then:", val); // 👉 logs 2
    return Promise.resolve(val + 1); // returns Promise that resolves to 3
  })
  .then((val) => {
    console.log("Third then:", val); // 👉 logs 3
    throw new Error("Something went wrong"); // throws error
  })
  .then((val) => {
    console.log("Fourth then:", val); // Skipped due to the error thrown above
  })
  .catch((err) => {
    console.log("Caught:", err.message); // // 👉 logs: Caught: Something went wrong
  });

/*
First then: 1
Second then: 2
Third then: 3
Caught: Something went wrong
*/

// ========== ASYNC ==============

async function test() {
  const a = await wait(1000, "A");
  const b = await wait(1000, "B");
  console.log(a, b); // logs => "A" and "B" after 2s because of sequence await
}

// Parallel version
async function test() {
  const [a, b] = await Promise.all([wait(1000, "A"), wait(1000, "B")]);
  console.log(a, b);
}

// Promise.race
Promise.race([
  wait(1000, "A"),
  wait(500, "B"), // ✅ resolves first
  wait(2000, "C"),
])
  .then((res) => console.log("Resolved with:", res))
  .catch((err) => console.log("Rejected with:", err));
// Promise.race() settles as soon as the first promise settles — whether it resolves or rejects
// In this case, wait(500, "B") resolves first (after 0.5s), so => Resolved with: B

// If wait(500, "B") is rejected, then response will be => Rejected with: B

// Promise any
Promise.any([
  Promise.reject("Error A"),
  Promise.reject("Error B"),
  Promise.resolve("Success C"),
])
  .then((res) => console.log("Resolved with:", res))
  .catch((err) => console.log("Rejected with:", err));
// Output => Resolved with: Success C
// Promise.any() resolves with the first successful value, Ignores rejections unless all fail
// If all fails, will go in catch block

// Promise.allSettled
Promise.allSettled([Promise.resolve("OK"), Promise.reject("Fail")]).then(
  (results) => console.log(results)
);
// Output => [
//   { status: 'fulfilled', value: 'OK' },
//   { status: 'rejected', reason: 'Fail' }
// ]
// Promise.allSettled() waits for all promises to settle
// Returns an array of results, each with: status: "fulfilled" or "rejected" value or reason

/*
| Method                 | Resolves With        | Rejects When           | Notes                 |
| ---------------------- | -------------------- | ---------------------- | --------------------- |
| `Promise.all()`        | All values           | If **any** reject      | Fails fast            |
| `Promise.race()`       | First to settle      | Whichever comes first  | Respects order/timing |
| `Promise.any()`        | First to **resolve** | Only if **all** reject | Returns first success |
| `Promise.allSettled()` | Array of all results | Never                  | Always resolves       |
*/
