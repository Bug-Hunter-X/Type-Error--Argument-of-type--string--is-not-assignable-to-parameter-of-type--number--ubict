function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : 0;
  const numB = typeof b === 'number' ? b : 0;
  return numA + numB;
}

let result1 = addSafe("hello", 5); // result is 5, handles the string gracefully
let result2 = add(5, 10); // This is correct
console.log(result1); // Output: 5
console.log(result2); // Output: 15