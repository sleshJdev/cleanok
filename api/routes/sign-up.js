const express = require('express');
const User = require('../persistence/mongo/model/user');
const JwtService = require('../services/jwt-service');
const EmailService = require('../services/email-service');
const appConfig = require('../config/app.config');

module.exports = express.Router()
  .post('/', (req, res, next) => {
    const user = new User(req.body);
    user.save((error, user) => {
      if (error) {
        return next(error);
      }
      JwtService.sign(
        {_id: user._id},
        token => {
          EmailService.sendVerificationLetter(
            user.email,
            {
              name: user.name,
              url: `${appConfig.auth.verificationUrl}?token=${token}`
            },
            () => res.end(),
            next
          );
        }, next);
    });
  })
  .get('/verification/email', (req, res, next) => {
    JwtService.verify(
      req.query.token,
      (claims) => {
        User.updateOne(
          {_id: claims._id},
          {$set: {active: true}},
          (error, user) => {
            if (error) {
              next(error)
            } else {
              res.redirect('/');
            }
          }
        );
      }
    )
  });
