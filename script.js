"use strict"

{
  const sharedWorker = new SharedWorker('sharedWorker.js');
  const port = sharedWorker.port;
  port.start();

  port.addEventListener('message', (event) => {
    const type = event.data.type;

    if (type === "Debug") {
      const value = event.data.value
      console.log(`---${value}`);
    }

    if (type === 'newResult') {
      const input = event.data.input
      const value = event.data.value
      console.log(`Fibonacci(${input}): ${value}`);
    }
    if (type === 'cachedResult') {
      const input = event.data.input
      const value = event.data.value
      console.log(`Fibonacci(${input}): ${value} (cached)`);
    }
  });

  function requestFibonacci(n) {
    port.postMessage({ type: 'requestResult', input: n });
  }

  // Test calls
  requestFibonacci(40); // Fibonacci(40): 102334155
  requestFibonacci(39); // Fibonacci(39): 63245986
  requestFibonacci(40); // Fibonacci(40): 102334155

  let timerId = setTimeout(function tick() {
    console.log("tick")
    timerId = setTimeout(tick, 500)
  }, 500)
}