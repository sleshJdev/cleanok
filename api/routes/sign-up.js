const express = require('express');
const User = require('../persistence/mongo/model/user');
const UserMetadata = require('../persistence/mongo/model/user_metadata');
const appConfig = require('../config/app.config');
const HttpError = require('../errors/http-error');
const JwtService = require('../services/jwt-service');
const EmailService = require('../services/email-service');
const TwilioService = require('../services/twilio-service');

function activateUser(conditions, res, next) {
  User.updateOne(
    conditions,
    {$set: {active: true}},
    (error, result) => {
      if (error) {
        next(error)
      } else if (!result.n && result.nModified) {
        next(new HttpError('Could not activate user.', 400));
      } else {
        res.redirect('/sing-in');
      }
    }
  );
}

function sendVerificationLetter(user, res, next) {
  JwtService
    .sign({_id: user._id})
    .then(token => {
      EmailService
        .sendVerificationLetter(user, token)
        .then(() => {
          res.send({
            verificationType: 'email',
            message: `Verification letter was sent to your email ${user.email}.`
          });
        }).catch(next);
    }).catch(next);
}

function sendVerificationCode(user, res, next) {
  const userMetadata = UserMetadata({
    tel: user.tel,
    code: Math.random().toString().substr(2, appConfig.auth.codeSize)
  });
  userMetadata.save((error, metadata) => {
    if (error) {
      return next(error);
    }
    TwilioService
      .sendVerificationCode(user.tel, metadata.code)
      .then(() => {
        res.send({
          verificationType: 'tel',
          message: `Verification code was sent to your phone ${user.tel}.`
        })
      }).catch(next);
  });
}

module.exports = express.Router()
  .post('/', (req, res, next) => {
    const newUser = new User(req.body);
    newUser.save((error, user) => {
      if (error) {
        next(error);
      } else if (user.tel) {
        sendVerificationCode(user, res, next);
      } else if (user.email) {
        sendVerificationLetter(user, res, next);
      } else {
        next(new HttpError('No address or phone number was provided.', 400));
      }
    });
  })
  .get('/verification/tel', (req, res, next) => {
    UserMetadata.findOne(
      {
        tel: req.query.tel,
        code: req.query.code
      },
      (error, metadata) => {
        if (error) {
          next(error);
        } else if (!metadata) {
          next(new HttpError('Could not find verification code.', 400));
        } else {
          activateUser({tel: metadata.tel}, res, next);
        }
      }
    );
  })
  .get('/verification/email', (req, res, next) => {
    JwtService
      .verify(req.query.token)
      .then((payload) => {
        activateUser({_id: payload._id}, res, next);
      }).catch(next);
  });
