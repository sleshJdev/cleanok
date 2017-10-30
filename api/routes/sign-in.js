const express = require('express');
const appConfig = require('../config/app.config');
const User = require('../persistence/mongo/model/user');
const JwtService = require('../services/jwt-service');
const AuthError = require('../errors/auth-error');

module.exports = express.Router()
  .post('/', (req, res, next) => {
    User.findOne(
      req.body.email
        ? {email: req.body.email}
        : {tel: req.body.tel},
      (error, user) => {
        if (error) {
          return next(error);
        } else if (!user) {
          return next(new AuthError(`User with email ${req.body.email} not found`));
        } else if (!user.active) {
          return next(new AuthError(`User is not active. Please verify your account using email/tel.`));
        } else if (req.body.password !== user.password) {
          return next(new AuthError(`Provided user password(${req.body.password}) is incorrect`));
        }
        const userDetails = user.toJSON();
        delete userDetails.password;
        JwtService.sign(
          userDetails,
          (token) => {
            res.send({
              userDetails: userDetails,
              token: {
                name: appConfig.authTokenHeaderName,
                value: token
              }
            });
          },
          next);
      });
  });
