function foo(a, b) {
  if (a === null || b === null) {
    return null; // This will not short-circuit
  } else {
    return a + b;
  }
}

console.log(foo(1, null)); // Output: null
console.log(foo(null, 1)); // Output: null
console.log(foo(1, 2)); // Output: 3