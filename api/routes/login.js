const router = require('express').Router();
const jwt = require('jsonwebtoken');
const appConfig = require('../config/app.config');
const User = require('../persistence/mongo/model/user');
const AuthError = require('../error/auth-error');

router.post('/', (req, res, next) => {
  User.findOne(
    req.body.email
      ? {email: req.body.email}
      : {tel: req.body.tel},
    (error, user) => {
      if (error) {
        next(error);
      } else if (!user) {
        next(new AuthError(`User with email ${req.body.email} not found`));
      } else if (user.password !== req.body.password) {
        next(new AuthError(`Provided user password(${req.body.password}) is incorrect`));
      } else {
        jwt.sign(
          {
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address
          },
          appConfig.auth.secretKey,
          appConfig.auth.jwtOptions,
          (error, token) => {
            if (error) {
              next(error);
            } else {
              res.send({
                token: token
              });
            }
          });
      }
    });
});

module.exports = router;
