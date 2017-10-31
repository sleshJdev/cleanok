const mongoose = require('mongoose');
const appConfig = require('../../../config/app.config');
const Schema = mongoose.Schema;

const UserMetadata = new Schema({
  tel: String,
  code: Number
});

const UserMetadataModel = mongoose.model('user_metadata', UserMetadata);

module.exports = UserMetadataModel;
