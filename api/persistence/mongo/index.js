const mongoose = require('mongoose');
const appConfig = require('../../config/app.config');

const mongoConfig = appConfig.persistence.mongo;

module.exports = (done, error) => {
  mongoose.connect(mongoConfig.url, {
    useMongoClient: true
  });
  mongoose.connection.on('connected', done);
  mongoose.connection.on('close', error);
};
