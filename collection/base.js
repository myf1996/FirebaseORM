const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const { getAnalytics } = require("firebase/analytics");
const { getFirestore } = require("firebase-admin/firestore");

class FirebaseConfig {
  constructor(config) {
    this.serviceAccount = config
    this.app = initializeApp({
      credential: cert(this.serviceAccount),
    })
    this.db = getFirestore(this.app);
  }
}

module.exports = class BaseCollection {
  constructor(name, config) {
    this.name = name;
    this.config = new FirebaseConfig(config)
    this.collection = this.config.db.collection(name);
  }

  async all(query) {
    const response = await this
      .collection
      .orderBy(query.orderBy || 'created_at')
      .limit( query.take || 20)
      .offset(query.skip || 0)
      .get();
    return response
      ._docs()
      .map( doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }
    )
  }

  async one(id) {
    const response = await this
      .collection
      .doc(id);
    const doc = await response.get();
    if (doc.exists) {
      return {...doc.data(), id: doc.id}
    } 
    const error = new Error(JSON.stringify({message:"Not Found"}))
    error.code = 404
    throw error
    
  }
  async delete(id) {
    await this.one(id)
    return await this
      .collection
      .doc(id)
      .delete()
  }
  
  async add(object) {
    object["created_at"] = object.created_at ? new Date(object.created_at).getTime() : new Date().getTime();
    object["updated_at"] = object.created_at ? new Date(object.created_at).getTime() : new Date().getTime();
    const ref = this
      .collection
      .add( 
        JSON.parse(
          JSON.stringify(object)
        )
      );
    object["id"] = ref.id;
    return object;
  }

  async update(id, change) {
    change["updated_at"] = new Date().getTime();
    await this
      .collection
      .doc(id)
      .update(
        JSON.parse(
          JSON.stringify(change)
        )
      );
    return change;
  }

  async getByKey(key, value) {
    // query = query || {
    //   orderBy: 'created_at',
    //   take: 5,
    //   skip: 0,
    // }
    const response = await this
      .collection
      .where(
        key, 
        '==', 
        value
      )
      // .orderBy(query.orderBy || 'created_at')
      // .limit( query.take || 20)
      // .offset(query.skip || 0)
      .get();
    return response
      ._docs()
      .map( doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }
    )
  }

  async Name(query) {
    const all = await this.all(query)
    return all.map(each => {
      return each.name
    })
  }

  async Contact(query){
    const all = await this.all(query)
    return all.map(each => {
      return each.contactInfo;
    })
  }

  async DateOfBirth(query){
    const all = await this.all(query)
    return all.map(each => {
      return each.dateOfBirth;
    })
  }

  async NumberOfview (id, change){
    return await this.update(id, change)
  }
}


// https://googleapis.dev/nodejs/firestore/latest/CollectionReference.html#offset