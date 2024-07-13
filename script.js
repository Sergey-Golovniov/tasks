let counter = (function () {
  let count = 0;
  return {
    increment() {
      return ++count;
    },
    getCount() {
      return count;
    }
  };
})();

console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1
console.log(counter.count); // undefined (count is private)