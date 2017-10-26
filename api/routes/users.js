const express = require('express');
const User = require('../persistence/mongo/model/user');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  User.findById(
    req.params.id,
    (error, user) => {
      if (error) {
        next(error);
      } else {
        res.send(user);
      }
    });
});

router.post('/', (req, res, next) => {
  const user = new User(req.body);
  user.save((error, user) => {
    if (error) {
      next(error);
    } else {
      res.end();
    }
  });
});

module.exports = router;
