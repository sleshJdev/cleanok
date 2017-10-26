const router = require('express').Router();
const User = require('../persistence/mongo/model/user');
const AuthError = require('../error/auth-error');

router.post('/', (req, res, next) => {
  User.findOne(
    {
      email: req.body.email
    },
    (error, user) => {
      if (error) {
        next(error);
      } else if (!user) {
        next(new AuthError(`User with email ${req.body.email} not found`));
      } else if (user.password === req.body.password) {
        user.password = null;
        res.send({
          key: Math.random().toString(),
          user: user
        });
      } else {
        res.sendStatus(401);
      }
    });
});

module.exports = router;
