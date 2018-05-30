const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./dbserver');
const {User} = require('./users-model');
const {ObjectID} = require('mongodb');
var app = express();
app.use(bodyParser.json());
app.post('/users', (req, res) => {
  var newUser = new User(req.body);
  newUser.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    console.log(e);
  });
});

app.get('/users', (req, res) => {
  User.find().then((users)=>{
    res.send({users});
  }, (e)=>{
    console.log(e);
    res.send(e);

  });

});

app.get('/users/:id', (req,res)=>{
  var id = req.params.id;
  if(ObjectID.isValid(id)){
    User.findById(id).then((user)=>{
      if (!user) {
        return res.status(404).send({});
      }
      res.status(200).send(user);
    }, (e)=>{
      res.status(400).send('fail');
    });
  } else {
    res.status(404).send('invalid request');
  }
});

app.listen(9999, () => {
  console.log('server is listening on port 9999');
});
