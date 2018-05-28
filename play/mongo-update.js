const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if(err){
    return err;
  }
  const db = client.db('TodoApp');
  db.collection('Todos').findOneAndUpdate({
    name: 'Yazeed'
  },
  {
    $set: {
    name: 'Rayan'
    }
  },
  {
    returnOriginal: false
  }

).then((result)=>{
  console.log(result);
});
});
