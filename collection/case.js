const BaseCollection = require("./base");
const Case = require("../model/case");
const Client = require("../model/client");

const COLLECTION_NAME = 'case';

module.exports = class CaseCollection extends BaseCollection {
  constructor(config) {
    super(COLLECTION_NAME, config);
  }

  async getClientCases(clientId) {
    return await this.getByKey('clientId', clientId)
  }

}