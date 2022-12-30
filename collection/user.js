const BaseCollection = require("./base");
const Case = require("../model/case");
const Client = require("../model/client");

const COLLECTION_NAME = 'user';

module.exports = class UserCollection extends BaseCollection {
  constructor(config) {
    super(COLLECTION_NAME, config);
  }
}