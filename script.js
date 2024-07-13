"use strict"

const messageQueue = [];

let sendMessage = (message) => {

};

sendMessage("first"); // first has been added to the batch
sendMessage("second"); // second has been added to the batch
sendMessage("third"); // third has been added to the batch

// messages batch: ["first","second","third"]