const Models = require('./base');

module.exports = class User extends Models {
  constructor(object) {
    super();
    this.name = object.name
  }
}