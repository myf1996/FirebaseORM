const Models = require('./base');

module.exports = class Client extends Models { 
  constructor(object) {
    super();
    this.name = object.name;
    this.dateOfBirth = object.dateOfBirth;
    this.contactInfo = object.contactInfo;
    this.symptoms = object.symptoms;
    this.documents = object.documents;
    this.createdBy = object.createdBy;
    this.numberOfVisit = object.numberOfVisit;
  }
}