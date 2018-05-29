const mongoose = require('mongoose');

var User = mongoose.model('Users', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  age: {
    type: Number
  },
  last: {
    type: String
  },
  email: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  }
});

module.exports = {
  User
}
