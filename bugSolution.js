function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle null, undefined, or non-numeric inputs
  }
  return a + b;
}