"use strict"

// Simulated API call with callback
function fetchUserData(userId, callback) {
  const fakeApiResponse = {
    1: { id: 1, name: 'Alice', age: 25 },
    2: { id: 2, name: 'Bob', age: 30 },
    3: { id: 3, name: 'Charlie', age: 35 }
  };
  setTimeout(() => {
    if (fakeApiResponse[userId]) {
      callback(null, fakeApiResponse[userId]);
    } else {
      callback(new Error('User not found'), null);
    }
  }, 1000);
}

// Your task: Promisify fetchUserData

// Test calls - Replace fetchUserData with your promisified function

// Test call 1
fetchUserDataPromise(1)
  .then(user => {
    console.log(user);
    // Expected output after 1 second: { id: 1, name: 'Alice', age: 25 }
  })
  .catch(error => {
    console.error(error);
  });

// Test call 2
fetchUserDataPromise(4)
  .then(user => {
    console.log(user);
  })
  .catch(error => {
    console.error(error);
    // Expected output after 1 second: Error: User not found
  });

// Test call 3
async function testFetch() {
  try {
    const user = await fetchUserDataPromise(2);
    console.log(user);
    // Expected output after 1 second: { id: 2, name: 'Bob', age: 30 }
  } catch (error) {
    console.error(error);
  }
}

testFetch();