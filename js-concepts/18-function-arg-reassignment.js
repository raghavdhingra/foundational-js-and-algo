let obj = { value: 10 };

function update(x) {
  x.value = 20; // ✅ modifies the original object
  x = { value: 30 }; // ❌ reassigns local variable `x` to a new object
}

update(obj);
console.log(obj.value); // 20

/*
What happened:
- x is passed by reference, so x.value = 20 modifies the same object obj points to.
- But then x = { value: 30 } just reassigns the local variable x to a new object.
- This doesn’t affect the original obj outside the function.
- So the change to x.value = 20 is retained, and the reassignment is discarded.
*/
