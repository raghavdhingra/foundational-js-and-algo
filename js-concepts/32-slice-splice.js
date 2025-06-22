const original = [1, 2, 3, 4, 5];

const sliced = original.slice(1, 4);
const spliced = original.splice(1, 3);

console.log("sliced:", sliced); // [2, 3, 4] => Non-mutating method
console.log("spliced:", spliced); //
console.log("original:", original);

/*
✅ .slice(1, 4)
- Non-mutating method, Returns a new array
- Includes start index (1) → value: 2 and Excludes end index (4)
So: [2, 3, 4] => original stays unchanged

⚠️ .splice(1, 3)
- Mutates the original array,
- At index 1, remove 3 elements → [2, 3, 4]
- original is now left with: [1, 5] => And it returns the removed items → [2, 3, 4]

| Method         | Returns     | Mutates Original? | Result                |
| -------------- | ----------- | ----------------- | --------------------- |
| `slice(1, 4)`  | `[2, 3, 4]` | ❌ No              | Pure and safe         |
| `splice(1, 3)` | `[2, 3, 4]` | ✅ Yes             | Dangerous side effect |

Using .splice() can lead to hard-to-track bugs when you're working with a shared array across multiple parts of code — it silently modifies the original.
*/
