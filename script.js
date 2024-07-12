"use strict"
async function chainPromises(functions) {
  // Your implementation here
}

// Test functions that return promises
const functions = [
  () => new Promise((resolve) => setTimeout(() => resolve('Result 1'), 1000)),
  () => new Promise((_, reject) => setTimeout(() => reject('Error 2'), 1000)),
  () => new Promise((resolve) => setTimeout(() => resolve('Result 3'), 1000)),
];

// Test call
chainPromises(functions)
  .then(results => console.log(results))
  .catch(error => console.error(error));

// Expected output: ['Result 1', 'Error 2', 'Result 3']