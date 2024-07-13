"use strict"

let user = {
  name: "John",
  _password: "***",
};

// write proxy
user = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error("Access denied");
    }
    let value = target[prop];
    return (typeof value === 'function') ? value.bind(target) : value;
  },
  set(target, prop, val) {
    if (prop.startsWith('_')) {
      throw new Error("Access denied");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error("Access denied");
    } else {
      delete target[prop];
      return true;
    }
  },
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

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