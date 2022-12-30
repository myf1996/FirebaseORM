const BaseCollection = require("./base");
const Case = require("../model/case");
const Client = require("../model/client");

const COLLECTION_NAME = 'client';

module.exports = class ClientCollection extends BaseCollection {
  constructor(config) {
    super(COLLECTION_NAME, config);
  }
}