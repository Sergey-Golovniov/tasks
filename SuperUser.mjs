import { User } from './User.mjs'
import { mix } from './mix.mjs'
import { AdminMixin, PermissionMixin } from './mixins.mjs'

export class SuperUser extends mix(User).with(AdminMixin, PermissionMixin) {
  constructor(name) {
    super(name);
    this.addPermission('write');
  }
}