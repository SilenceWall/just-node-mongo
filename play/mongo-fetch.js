const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if(err){
    return err;
  }
  const db = client.db('TodoApp');
  db.collection('Todos').find({_id: new ObjectID('5b0b6b6e2e96670371b69c4a')}).toArray().then((doc)=>{
    console.log(JSON.stringify(doc, undefined, 2));
  },(err)=>{
    console.log(err);
  });

});
