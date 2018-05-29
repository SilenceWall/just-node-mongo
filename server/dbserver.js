const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};

// var newTodo = new Todo({
//   name: 'HHH',
//   age: 29,
//   last: 'Yousef',
//   email: 'gh@h.com'
// });
//
// newTodo.save().then((docs)=>{
//   console.log(docs);
// }, (err)=>{
//   console.log(err);
// });
