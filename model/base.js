module.exports = class Models {
  created_at;
  updated_at;

  constructor(object) {
    Object.assign(this, object)
  }

  toJson(){
    return JSON.parse(JSON.stringify(this))
  }
}