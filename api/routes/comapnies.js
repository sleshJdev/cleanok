const express = require('express');
const Company = require('../persistence/mongo/model/company');

module.exports = express.Router({strict: true})
  .post('/', (req, res, next) => {
    const company = new Company(req.body);
    company.save(req.body, (error, company) => {
      if (error) {
        return next(error);
      }
      res.send(company);
    });
  });
