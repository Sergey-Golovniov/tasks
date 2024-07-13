export function mix(superclass) {
  return new class {
    constructor(superclass) {
      this.superclass = superclass;
    }

    with(...mixins) {
      return mixins.reduce((chain, mixin) => mixin(chain), this.superclass);
    }
  }(superclass)
}