import { User } from './User.mjs'
import { mix } from './mix.mjs'
import { RoleMixin, PermissionMixin } from './mixins.mjs'

export class RegularUser extends mix(User).with(RoleMixin, PermissionMixin) {
  constructor(name) {
    super(name);
  }
}