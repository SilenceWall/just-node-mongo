const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('could not connect to DB');
  }
  console.log('connected ...');
  const db = client.db('TodoApp');
  db.collection('Todos').insertOne({
    name: 'Yazeed',
    last: 'Shahin',
    age:37
  }, (err, result) =>{
    if (err){
      return console.log('there was error on saving');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  client.close();
});
