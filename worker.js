"use strict"
// worker.js
addEventListener("message", function (input) {
  const value = fibonacci(input.data)
  postMessage({ input: input.data, value })
})


function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}