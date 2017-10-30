const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  tel: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'client', 'company']
  }
});

const UserModel = mongoose.model('user', User);

module.exports = UserModel;
