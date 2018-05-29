const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./dbserver');
const {User} = require('./users-model');
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


app.listen(9999, () => {
  console.log('server is listening on port 9999');
});
