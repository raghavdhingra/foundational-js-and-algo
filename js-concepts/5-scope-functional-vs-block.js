function testVarLet() {
  if (true) {
    var x = 10; // x is function-scoped → accessible anywhere inside testVarLet
    let y = 20; // y is block-scoped → exists only inside the if block
  }

  console.log(x); // ✅ 10
  console.log(y); // ❌ ReferenceError: y is not defined
}

testVarLet();
