const appConfig = require('../config/app.config');
const jwt = require('jsonwebtoken');

module.exports = {
  sign: (claims) => {
    return new Promise((success, reject) => {
      jwt.sign(
        claims,
        appConfig.auth.secretKey,
        appConfig.auth.jwtOptions,
        (error, token) => {
          if (error) {
            reject(error);
          } else {
            success(token);
          }
        });
    });
  },
  verify: (token) => {
    return new Promise((success, reject) => {
      jwt.verify(
        token,
        appConfig.auth.secretKey,
        (error, claims) => {
          if (error) {
            reject(error);
          } else {
            success(claims);
          }
        }
      );
    });
  }
};
