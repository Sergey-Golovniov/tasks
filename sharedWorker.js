"use strict"
// sharedWorker.js must cache the results, so that worker does not need to do the same job twice. If script.js called
// requestFibonacci(39), and then whatever.js did the same, the second time result must be extracted from cache

// The request order must correspond the response order:
// requestFibonacci(39);
// requestFibonacci(38);
// Log: Fibonacci(39): 63245986, then
// Log: Fibonacci(38): 39088169

// use fiveserver