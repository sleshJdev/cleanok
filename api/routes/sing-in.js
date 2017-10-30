const express = require('express');
const jwt = require('jsonwebtoken');
const appConfig = require('../config/app.config');
const User = require('../persistence/mongo/model/user');
const AuthError = require('../error/auth-error');

module.exports = express.Router()
  .post('/', (req, res, next) => {
    User.findOne(
      req.body.email
        ? {email: req.body.email}
        : {tel: req.body.tel},
      (error, user) => {
        if (error) {
          next(error);
        } else if (!user) {
          next(new AuthError(`User with email ${req.body.email} not found`));
        } else if (req.body.password !== user.password) {
          next(new AuthError(`Provided user password(${req.body.password}) is incorrect`));
        } else {
          const userDetails = user.toJSON();
          delete userDetails.password;
          jwt.sign(
            userDetails,
            appConfig.auth.secretKey,
            appConfig.auth.jwtOptions,
            (error, token) => {
              if (error) {
                next(error);
              } else {
                res.send({
                  userDetails: userDetails,
                  token: {
                    name: appConfig.authTokenHeaderName,
                    value: token
                  }
                });
              }
            });
        }
      });
  });
