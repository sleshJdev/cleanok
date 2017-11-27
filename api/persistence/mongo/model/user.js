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
    type: String
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'client',
    enum: ['admin', 'client', 'company']
  },
  active: {
    type: Boolean,
    default: false
  }
});

const UserModel = mongoose.model('user', User);

module.exports = UserModel;
