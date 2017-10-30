const express = require('express');
const HttpError = require('../errors/http-error');
const User = require('../persistence/mongo/model/user');

module.exports = express.Router({strict: true})
  .get('/', (req, res, next) => {
    User
      .find({})
      .select('-password')
      .exec((error, users) => {
        if (error) {
          next(error);
        } else {
          res.send(users);
        }
      });
  })
  .get('/:id', (req, res, next) => {
    User
      .findById(req.params.id)
      .select('-password')
      .exec((error, user) => {
        if (error) {
          next(error);
        } else {
          res.send(user);
        }
      });
  })
  .delete('/:id', (req, res, next) => {
    User.findById(
      req.params.id,
      (error, user) => {
        if (error) {
          return next(error);
        }
        if (!user) {
          return next(new HttpError(`User(id=${req.params.id} not found`, 404));
        }
        user.remove((error) => {
          if (error) {
            return next(error);
          }
          res.end();
        });
      });
  });
