"use strict"
// use generator
let range = {
  from: 1,
  to: 5,
  // method here
};

console.log([...range]); // [ 1, 2, 3, 4, 5 ]

// generator here

let generator = generateSequence(1, 5);
for await (let value of generator) {
  console.log(value); // 1, then 2, then 3, then 4, then 5 (with delay between)
}