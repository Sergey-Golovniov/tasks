"use strict"
// sharedWorker.js must cache the results, so that worker does not need to do the same job twice. If script.js called
// requestFibonacci(39), and then whatever.js did the same, the second time result must be extracted from cache

// The request order must correspond the response order:
// requestFibonacci(39);
// requestFibonacci(38);
// Log: Fibonacci(39): 63245986, then
// Log: Fibonacci(38): 39088169

// use fiveserver

let promiseChain = Promise.resolve();
const cache = new Map();

addEventListener('connect', function (event) {
  const port = event.ports[0]
  port.start()

  port.postMessage({
    type: "Debug",
    value: JSON.stringify(Array.from(cache, ([name, value]) => ({ name, value })))
  })

  port.addEventListener('message', function (input) {
    input = input.data;

    // add the request to the promise chain
    promiseChain = promiseChain.then(() =>
      new Promise(resolve => {
        if (cache.has(input)) {
          port.postMessage({
            type: "cachedResult",
            input,
            value: cache.get(input)
          })
          resolve()
        } else {
          const worker = new Worker('worker.js')
          worker.postMessage(input)
          worker.addEventListener("message", function (result) {
            cache.set(result.data.input, result.data.value)
            port.postMessage({
              type: "newResult",
              input: result.data.input,
              value: result.data.value
            })
            resolve()
          })
        }
      })
    )
  })
})