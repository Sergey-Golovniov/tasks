export { RoleMixin, AdminMixin, PermissionMixin }

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