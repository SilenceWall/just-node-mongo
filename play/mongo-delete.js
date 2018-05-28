const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if(err){
    return err;
  }
  const db = client.db('TodoApp');
  db.collection('Todos').findOneAndDelete({name: 'Yazeed'}).then((docs)=>{
    console.log(docs);
  });
});
