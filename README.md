# TypeScript Type Error Bug

This repository demonstrates a common type error in TypeScript. The `add` function is defined to accept two numbers and return their sum. However, in the example usage, a string is passed as an argument, resulting in a type error.

## How to reproduce

1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler: `tsc bug.ts`
3. Observe the type error message.

## Solution

The solution involves ensuring that only numbers are passed as arguments to the `add` function. This can be achieved through type checking or by providing more robust input handling.