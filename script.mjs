"use strict"
// use generator
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let i = this.from; i < this.to; i++) {
      yield i
    }
  }
};

console.log([...range]); // [ 1, 2, 3, 4, 5 ]

async function* generateSequence(from, to) {
  for (let i = from; i <= to; i++) {
    yield await new Promise(resolve => setTimeout(resolve, 100, i))
  }
}

let generator = generateSequence(1, 5);
for await (let value of generator) {
  console.log(value); // 1, then 2, then 3, then 4, then 5 (with delay between)
}