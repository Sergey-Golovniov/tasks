"use strict"

// Define the base class
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// Define mixins
let RoleMixin = (superclass) => class extends superclass {
  constructor(...args) {
    super(...args);
    this.role = 'User';
  }

  getRole() {
    return this.role;
  }
};

let AdminMixin = (superclass) => class extends RoleMixin(superclass) {
  constructor(...args) {
    super(...args);
    this.role = 'Admin';
  }

  canAccessSensitiveData() {
    return true;
  }
};

let PermissionMixin = (superclass) => class extends superclass {
  constructor(...args) {
    super(...args);
    this.permissions = ['read'];
  }

  addPermission(permission) {
    this.permissions.push(permission);
  }

  hasPermission(permission) {
    return this.permissions.includes(permission);
  }
};

// Use mix function to create classes with mixins
class RegularUser extends mix(User).with(RoleMixin, PermissionMixin) {
  constructor(name) {
    super(name);
  }
}

class SuperUser extends mix(User).with(AdminMixin, PermissionMixin) {
  constructor(name) {
    super(name);
    this.addPermission('write');
  }
}

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