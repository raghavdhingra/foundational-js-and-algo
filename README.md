# Algorithms & JavaScript Concepts

A comprehensive collection of JavaScript algorithms, data structures, and fundamental JavaScript concepts with detailed explanations and examples.

## 📁 Project Structure

```
algo/
├── README.md
├── LICENSE
├── algo/                  # Additional algorithms subdirectory
│   ├── deep-clone.js      # Deep cloning algorithm
│   ├── flatten-array.js   # Array flattening algorithm
│   └── group-anagram.js   # Group anagrams algorithm
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
    ├── 26-promises.js
    ├── 27-classes.js
    ├── 28-class-private-static.js
    ├── 29-loop-function.js
    ├── 30-sort-array.js
    ├── 31-destructuring.js
    ├── 32-slice-splice.js
    └── 33-event-loop.js
```

## 🚀 Algorithms

### Deep Clone Implementation

**Files:** `algo/deep-clone.js`

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

**Files:** `algo/flatten-array.js`

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

### Group Anagrams

**File:** `algo/group-anagram.js`

Algorithm to group strings that are anagrams of each other using a hash map approach.

```javascript
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
// Result: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

**Key Features:**

- Uses Map data structure for efficient grouping
- Sorts characters to create unique keys
- Handles multiple anagram groups
- Time complexity: O(n \* k log k) where n is number of strings, k is max string length

**Algorithm Approach:**

1. Sort each string's characters to create a unique key
2. Use Map to group strings with the same sorted key
3. Return grouped arrays

## 📚 JavaScript Concepts

### 🔰 **Beginner Level (0-9)**

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

#### 5. **Scope Types** (`5-scope-functional-vs-block.js`)

- Function scope vs block scope
- Variable accessibility rules

#### 6. **Type System** (`6-null-is-object.js`, `14-NaN-value.js`, `21-typeof-class.js`)

- `typeof` operator behavior
- `null` and `undefined` differences
- `NaN` properties and detection
- Class type checking

#### 7. **Decimal Operations** (`7-decimal-value.js`)

- Floating-point precision
- Decimal arithmetic behavior

#### 8. **Object Operations** (`8-compare-object.js`, `20-object-math-operation.js`)

- Object comparison
- Reference vs value comparison
- Object mathematical operations

#### 9. **Conditional Logic** (`9-non-null-if-condition.js`)

- Truthy/falsy values
- Conditional evaluation
- Null checking patterns

### 🔶 **Intermediate Level (10-19)**

#### 10. **Variable Management** (`10-variable-reassignment.js`)

- Variable reassignment behavior
- Reference vs value assignment

#### 11. **Reference Assignment** (`11-reference-assignment.js`)

- Object and array reference behavior
- Shallow vs deep copying

#### 12. **Array Value Assignment** (`12-array-value-assignment.js`)

- Array element assignment patterns
- Reference sharing in arrays

#### 13. **Hoisting** (`13-hoisted-value.js`)

- Variable hoisting
- Function hoisting
- Temporal dead zone

#### 15. **Operators and Operations** (`15-add-increment.js`, `16-number-string-operation.js`, `17-multiple-string-number-operation.js`)

- Increment/decrement operators
- Number-string operations
- Type coercion in operations

#### 18. **Functions** (`18-function-arg-reassignment.js`, `23-bind.js`, `25-apply-call-function.js`)

- Function argument reassignment
- `bind()`, `apply()`, `call()` methods
- Function context and `this`

#### 19. **Instance Checking** (`19-instanceof.js`)

- `instanceof` operator
- Constructor checking
- Inheritance verification

#### 22. **Array Reassignment** (`22-array-reassignment.js`)

- Array reassignment patterns
- Reference behavior in arrays

### 🔥 **Advanced Level (20-33)**

#### 24. **Prototypes** (`24-prototype-object.js`)

- Prototype chain
- Object inheritance
- Prototype methods

#### 26. **Asynchronous JavaScript** (`26-promises.js`)

- Promise fundamentals
- Promise chaining
- `async`/`await` syntax
- Promise methods:
  - `Promise.all()`
  - `Promise.race()`
  - `Promise.any()`
  - `Promise.allSettled()`

#### 27. **Classes** (`27-classes.js`)

- Class syntax and inheritance
- Method overriding
- `super()` keyword usage
- Constructor behavior

#### 28. **Advanced Classes** (`28-class-private-static.js`)

- Private fields (`#privateField`)
- Static methods and properties
- Class inheritance patterns
- Instance vs static access

#### 29. **Array Methods** (`29-loop-function.js`)

- `map()`, `filter()`, `reduce()` functions
- Array transformation patterns
- Functional programming concepts

#### 30. **Array Sorting** (`30-sort-array.js`)

- `sort()` method behavior
- Lexicographic vs numeric sorting
- Array mutation considerations

#### 31. **Destructuring** (`31-destructuring.js`)

- Object destructuring
- Nested destructuring
- Default values
- Fallback patterns

#### 32. **Array Manipulation** (`32-slice-splice.js`)

- `slice()` vs `splice()` methods
- Mutating vs non-mutating operations
- Array safety considerations

#### 33. **Event Loop** (`33-event-loop.js`)

- JavaScript execution model
- Microtasks vs macrotasks
- `async`/`await` execution order
- Promise vs `setTimeout` timing

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

## �� Learning Path

### 🟢 **Beginner Level**

1. Start with `0-simple-operation.js` for basic equality concepts
2. Move to `1-array-using-plus.js` for array operations
3. Study `3-loop-var-vs-let.js` for variable scoping
4. Explore `4-closure.js` for closure concepts

### 🟡 **Intermediate Level**

1. Study `6-null-is-object.js` and `14-NaN-value.js` for type system
2. Practice with `8-compare-object.js` for object operations
3. Learn `13-hoisted-value.js` for hoisting behavior
4. Master `16-number-string-operation.js` for type coercion

### 🔴 **Advanced Level**

1. Master `26-promises.js` for asynchronous programming
2. Deep dive into `24-prototype-object.js` for inheritance
3. Practice with `25-apply-call-function.js` for function context
4. Study `27-classes.js` and `28-class-private-static.js` for modern classes
5. Explore `33-event-loop.js` for JavaScript execution model

## 🎯 Key Takeaways

- **Type Safety:** Always use strict equality (`===`) and understand type coercion
- **Scope Management:** Prefer `let` and `const` over `var` for better scoping
- **Object References:** Be careful with object and array assignments
- **Asynchronous Patterns:** Master promises and async/await for modern JavaScript
- **Memory Management:** Understand closures and their memory implications
- **Array Safety:** Use non-mutating methods when possible
- **Class Design:** Leverage private fields and static methods for better encapsulation

## 🚀 Advanced Features Covered

- **Modern JavaScript:** Classes, private fields, static methods
- **Functional Programming:** Map, filter, reduce patterns
- **Asynchronous Programming:** Promises, async/await, event loop
- **Object-Oriented Programming:** Inheritance, prototypes, method overriding
- **Array Manipulation:** Destructuring, slicing, sorting, flattening

## 🤝 Contributing

Feel free to contribute by:

- Adding new JavaScript concepts
- Improving existing examples
- Adding more detailed explanations
- Creating additional algorithms
- Suggesting new topics to cover

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Learning! 🚀**
