const User = require('./model/user');
const Case = require('./model/case');
const Client = require('./model/client');

const UserCollection = require('./collection/user')
const ClientCollection = require('./collection/client')
const CaseCollection = require('./collection/case')

let config  = require('./firebaseConfig.json')
const uuidv1 = require('uuid/v1');
const dbId = () => uuidv1();
const id = dbId()
let query = {
  orderBy: 'created_at',
  take: 5,
  skip: 0,
}

// const user = new User({name: 'MYF'})
const userCollection = new UserCollection(config)
// userCollection.add(user)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// userCollection.one('5zwyFIaSrfDZlB9pN3kM')
//   .then(res => console.log(res))
//   .catch
// userCollection.delete('5zwyFIaSrfDZlB9pN3kM')
// userCollection.all(query).then(res => console.log(res))
// userCollection.Name(
//   query
// ).then(
//   res => console.log(res)
// )
// .catch(
//   err => console.log(err)
// );


// const cases = new Case({
//   id: id, 
//   clientId: 'client-123'
// })

// const caseCollection = new CaseCollection(config)
// caseCollection.add(cases)
// .then(res => console.log(res))
// .catch(err => console.log(err))

// caseCollection.getClientCases(
//   'client-123',
//   query
// ).then(
//     res => console.log(res)
//   )
//   .catch(
//     err => console.log(err)
//   );


