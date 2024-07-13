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
  requestFibonacci(38); // Fibonacci(38): 39088169
  requestFibonacci(39); // Fibonacci(39): 63245986 
}
