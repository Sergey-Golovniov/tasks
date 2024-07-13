"use strict"

import { RegularUser } from './RegularUser.mjs'
import { SuperUser } from './SuperUser.mjs'

const user = new RegularUser('John Doe');

test(user.getName(), "John Doe");
test(user.getRole(), "User");
test(user.hasPermission('read'), true);
test(user.hasPermission('write'), false);

const admin = new SuperUser('Jane Smith');

test(admin.getName(), "Jane Smith");
test(admin.getRole(), "Admin");
test(admin.canAccessSensitiveData(), true);
test(admin.hasPermission('read'), true);
test(admin.hasPermission('write'), true);

admin.addPermission('delete');

test(admin.hasPermission('delete'), true);


function test(log, expected) {
  if (log === expected) {
    console.log(`${log} ✔️`)
  } else {
    console.log(`${log} (${expected} is expected)❌`)
  }
}