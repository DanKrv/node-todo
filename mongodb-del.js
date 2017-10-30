//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('connected to mongoDB server');

  //del many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

//del one
// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });

//find one and del
db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  console.log(result);
});


//  db.close();
});
