const Models = require('./base');

module.exports = class Case extends Models {
  constructor(object) {
    super();
    this.id = object.id;
    this.clientId = object.clientId;
    this.userId = object.userId;
    this.createdBy = object.createdBy;
    this.leftHand = object.leftHand;
    this.rightHand = object.rightHand;
    this.leftFeet = object.leftFeet;
    this.rightFeet = object.rightFeet;
    this.bmd = object.bmd;
    this.whiplash = object.whiplash;
    this.es = object.es;
    this.ut = object.ut;
    this.tj = object.tj;
    this.it = object.it;
    this.cdc = object.cdc;
    this.cs = object.cs;
    this.ro = object.ro;
    this.rt = object.rt;
    this.h = object.h;
    this.ns = object.ns;
    this.ps = object.ps;
    this.l = object.l;
    this.accessedImpulses = object.accessedImpulses;
    this.supportImpulses = object.supportImpulses;
    this.additionalNotes = object.additionalNotes;
    this.scarLocalTherapy = object.scarLocalTherapy;
    this.inversionTherapy = object.inversionTherapy;
    this.pdf = object.pdf;
  }
}