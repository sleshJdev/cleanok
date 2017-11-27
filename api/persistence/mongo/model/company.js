const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Company = new Schema({
  title: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'active',
    enum: ['active', 'block']
  }
});

const CompanyModel = mongoose.model('company', Company);

module.exports = CompanyModel;
