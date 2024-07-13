"use strict"

// write curry function
const curry = function (fn) {
  return function (...args) {
    if (args.length >= fn.length) {
      return fn.call(this, ...args)
    } else {
      return fn.bind(this, ...args);
    }
  }
}

const user = {
  name: "John",
  sayHi(phrase, phrase2) {
    console.log(`${this.name}: Hi!`)
    console.log(`${this.name}: ${phrase}`)
    console.log(`${this.name}: ${phrase2}`)
  }
}

user.curriedSayHi = curry(user.sayHi);

user.curriedSayHi('whatever', 'whatever2');
user.curriedSayHi('whatever')('whatever2'); 