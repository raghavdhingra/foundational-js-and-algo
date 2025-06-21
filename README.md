# Algorithms & JavaScript Concepts

A comprehensive collection of JavaScript algorithms, data structures, and fundamental JavaScript concepts with detailed explanations and examples.

## 📁 Project Structure

```
algo/
├── README.md
├── deep-clone.js          # Deep cloning algorithm implementation
├── flatten-array.js       # Array flattening algorithm
└── js-concepts/          # JavaScript fundamentals and concepts
    ├── 0-simple-operation.js
    ├── 1-array-using-plus.js
    ├── 2-lexical-arrow-vs-function.js
    ├── 3-loop-var-vs-let.js
    ├── 4-closure.js
    ├── 5-scope-functional-vs-block.js
    ├── 6-null-is-object.js
    ├── 7-decimal-value.js
    ├── 8-compare-object.js
    ├── 9-non-null-if-condition.js
    ├── 10-variable-reassignment.js
    ├── 11-reference-assignment.js
    ├── 12-array-value-assignment.js
    ├── 13-hoisted-value.js
    ├── 14-NaN-value.js
    ├── 15-add-increment.js
    ├── 16-number-string-operation.js
    ├── 17-multiple-string-number-operation.js
    ├── 18-function-arg-reassignment.js
    ├── 19-instanceof.js
    ├── 20-object-math-operation.js
    ├── 21-typeof-class.js
    ├── 22-array-reassignment.js
    ├── 23-bind.js
    ├── 24-prototype-object.js
    ├── 25-apply-call-function.js
    └── 26-promises.js
```

## 🚀 Algorithms

### Deep Clone Implementation

**File:** `deep-clone.js`

A recursive deep cloning algorithm that creates a complete copy of nested objects and arrays without sharing references.

```javascript
const original = {
  name: "John",
  age: 30,
  skills: ["JS", "React"],
  address: {
    city: "Delhi",
    coords: { lat: 28.6, lng: 77.2 },
  },
};

const clone = deepClone(original);
// Modifications to clone don't affect original
```

**Key Features:**

- Handles nested objects and arrays
- Preserves primitive values
- Creates completely independent copies
- Recursive implementation

### Array Flattening

**File:** `flatten-array.js`

Recursive algorithm to flatten deeply nested arrays into a single-level array.

```javascript
const nested = [1, [2, [3, 4], 5]];
const flattened = flattenArray(nested);
// Result: [1, 2, 3, 4, 5]
```

**Features:**

- Handles arbitrary nesting depth
- Preserves element order
- Works with mixed data types

## 📚 JavaScript Concepts

### Core JavaScript Fundamentals

#### 1. **Equality Operations** (`0-simple-operation.js`)

- Loose equality (`==`) vs Strict equality (`===`)
- Type coercion examples
- Best practices for comparisons

#### 2. **Array Operations** (`1-array-using-plus.js`)

- Array concatenation with `+` operator
- String conversion behavior
- Proper array concatenation methods

#### 3. **Variable Scoping** (`2-lexical-arrow-vs-function.js`, `3-loop-var-vs-let.js`)

- `var` vs `let` vs `const`
- Block scope vs function scope
- Temporal dead zone (TDZ)
- Arrow functions vs regular functions

#### 4. **Closures** (`4-closure.js`)

- Lexical scoping
- Closure creation and usage
- Practical closure examples

#### 5. **Type System** (`6-null-is-object.js`, `14-NaN-value.js`, `21-typeof-class.js`)

- `typeof` operator behavior
- `null` and `undefined` differences
- `NaN` properties and detection
- Class type checking

#### 6. **Object Operations** (`8-compare-object.js`, `20-object-math-operation.js`)

- Object comparison
- Reference vs value comparison
- Object mathematical operations

#### 7. **Arrays and References** (`11-reference-assignment.js`, `12-array-value-assignment.js`, `22-array-reassignment.js`)

- Array reference behavior
- Array value assignment
- Array reassignment patterns

#### 8. **Hoisting** (`13-hoisted-value.js`)

- Variable hoisting
- Function hoisting
- Temporal dead zone

#### 9. **Operators and Operations** (`15-add-increment.js`, `16-number-string-operation.js`, `17-multiple-string-number-operation.js`)

- Increment/decrement operators
- Number-string operations
- Type coercion in operations

#### 10. **Functions** (`18-function-arg-reassignment.js`, `23-bind.js`, `25-apply-call-function.js`)

- Function argument reassignment
- `bind()`, `apply()`, `call()` methods
- Function context and `this`

#### 11. **Prototypes** (`24-prototype-object.js`)

- Prototype chain
- Object inheritance
- Prototype methods

#### 12. **Instance Checking** (`19-instanceof.js`)

- `instanceof` operator
- Constructor checking
- Inheritance verification

#### 13. **Conditional Logic** (`9-non-null-if-condition.js`)

- Truthy/falsy values
- Conditional evaluation
- Null checking patterns

#### 14. **Asynchronous JavaScript** (`26-promises.js`)

- Promise fundamentals
- Promise chaining
- `async`/`await` syntax
- Promise methods:
  - `Promise.all()`
  - `Promise.race()`
  - `Promise.any()`
  - `Promise.allSettled()`

## 🛠️ How to Use

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd algo
   ```

2. **Run individual files:**

   ```bash
   node deep-clone.js
   node flatten-array.js
   node js-concepts/0-simple-operation.js
   ```

3. **Explore concepts:**
   - Each file contains detailed comments explaining the concept
   - Run files to see output and understand behavior
   - Modify examples to experiment with different scenarios

## 📖 Learning Path

### Beginner Level

1. Start with `0-simple-operation.js` for basic equality concepts
2. Move to `1-array-using-plus.js` for array operations
3. Study `3-loop-var-vs-let.js` for variable scoping

### Intermediate Level

1. Explore `4-closure.js` for closure concepts
2. Study `6-null-is-object.js` and `14-NaN-value.js` for type system
3. Practice with `8-compare-object.js` for object operations

### Advanced Level

1. Master `26-promises.js` for asynchronous programming
2. Deep dive into `24-prototype-object.js` for inheritance
3. Practice with `25-apply-call-function.js` for function context

## 🎯 Key Takeaways

- **Type Safety:** Always use strict equality (`===`) and understand type coercion
- **Scope Management:** Prefer `let` and `const` over `var` for better scoping
- **Object References:** Be careful with object and array assignments
- **Asynchronous Patterns:** Master promises and async/await for modern JavaScript
- **Memory Management:** Understand closures and their memory implications

## 🤝 Contributing

Feel free to contribute by:

- Adding new JavaScript concepts
- Improving existing examples
- Adding more detailed explanations
- Creating additional algorithms

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Learning! 🚀**
