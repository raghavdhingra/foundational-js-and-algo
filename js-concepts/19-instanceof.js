console.log(typeof null); // 👉 "object". It's a bug, explained in 6-null-is-object
console.log(null instanceof Object); // 👉 false => instanceof checks whether a value's prototype chain includes Object.prototype
// But null has no prototype, so it's not an instance of anything

// null don't have any instance
// So null instanceof null => throws error

// [] instanceof Array         // true
// {} instanceof Object        // true
// (() => {}) instanceof Function // true
