"use strict"

let user = {
  name: "John",
  _password: "***",
};

// write proxy

try {
  console.log(user._password);
} catch (e) { test(e.message, "Access denied"); }

try {
  user._password = "test";
} catch (e) { test(e.message, "Access denied"); }

try {
  delete user._password;
} catch (e) { test(e.message, "Access denied"); }

for (let key in user) test(key, 'name'); // name

user.checkPassword = function (value) {
  return value === this._password;
}

test(user.checkPassword('***'), true)
test(delete user.name, true)
test(user.surname = "Doe", "Doe")

function test(log, expected) {
  if (log === expected) {
    console.log(`${log} ✔️`)
  } else {
    console.log(`${log} (${expected} is expected)❌`)
  }
}