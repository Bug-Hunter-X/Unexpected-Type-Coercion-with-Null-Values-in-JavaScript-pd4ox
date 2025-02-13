function foo(a, b) {
  if (a === null || b === null) {
    return null; // This line handles null values
  }
  return a + b; //The bug was here. This line was causing the error
}