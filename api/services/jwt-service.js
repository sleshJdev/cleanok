const appConfig = require('../config/app.config');
const jwt = require('jsonwebtoken');

module.exports = {
  sign: (claims, onsuccess, onerror) => {
    jwt.sign(
      claims,
      appConfig.auth.secretKey,
      appConfig.auth.jwtOptions,
      (error, token) => {
        if (error) {
          onerror(error);
        } else {
          onsuccess(token);
        }
      })
  },
  verify: (token, onsuccess, onerror) => {
    jwt.verify(
      token,
      appConfig.auth.secretKey,
      (error, claims) => {
        if (error) {
          onerror(error);
        } else {
          onsuccess(claims);
        }
      }
    )
  }
};
