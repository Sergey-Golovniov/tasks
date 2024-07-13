"use strict"

const messageQueue = [];

let sendMessage = (message) => {
  messageQueue.push(message);
  console.log(`${message} has been added to the batch`)

  if (messageQueue.length === 1) {
    queueMicrotask(() => {
      const json = JSON.stringify(messageQueue);
      messageQueue.length = 0;
      console.log(`messages batch: ${json}`);
    });
  }
};

sendMessage("first"); // first has been added to the batch
sendMessage("second"); // second has been added to the batch
sendMessage("third"); // third has been added to the batch

// messages batch: ["first","second","third"]