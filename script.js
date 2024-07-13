// Implement the runTasks function
function runTasks(tasks, finalCallback) {
  function runTask(index) {
    if (index >= tasks.length) {
      return finalCallback(); // All tasks completed successfully
    }

    tasks[index]((err) => {
      if (err) {
        return finalCallback(err); // An error occurred, stop further execution
      }
      runTask(index + 1); // Proceed to the next task
    });
  }

  runTask(0); // Start with the first task
}

// Example asynchronous tasks with error handling
const task1 = (callback) => {
  setTimeout(() => {
    console.log('Task 1 completed');
    callback(); // No error
  }, 100);
};

const task2 = (callback) => {
  setTimeout(() => {
    console.log('Task 2 completed');
    callback(); // No error
  }, 50);
};

const task3 = (callback) => {
  setTimeout(() => {
    console.log('Task 3 completed');
    callback(); // No error
  }, 20);
};

const taskWithError = (callback) => {
  setTimeout(() => {
    console.log('Task with error');
    callback(new Error('An error occurred in taskWithError')); // Error
  }, 30);
};



// Test calls with expected output in comments
runTasks([task1, task2, task3], (err) => {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log('All tasks completed successfully');
  }
});
// Expected output:
// Task 1 completed
// Task 2 completed
// Task 3 completed
// All tasks completed successfully

setTimeout(() => {
  runTasks([task1, taskWithError, task3], (err) => {
    if (err) {
      console.error('Error:', err.message);
    } else {
      console.log('All tasks completed successfully');
    }
  })
}, 1000);
// Expected output:
// Task 1 completed
// Task with error
// Error: An error occurred in taskWithError
