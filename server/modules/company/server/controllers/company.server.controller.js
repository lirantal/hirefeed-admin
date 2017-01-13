'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Company = mongoose.model('Company'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Get a list of all visitors
 */
exports.getCompany = function (req, res) {

  let companyId = '' + req.query.companyId;

  Company.findOne({
    _id: companyId
  }).
  exec(function(err, results) {
    if (err) {
      res.status(500).send({
        message: errorHandler.getErrorMessage(err)
      });
    }

    res.status(200).send({
      company: results
    });

  });

};


/**
 * Create new Company entry
 */
exports.newCompany = function (req, res) {

  let company = new Company({
    name: '' + req.body.name
  });

  company.save(function(err) {
    if (err) {
      res.status(500).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.status(201).json(company);
    }
  });

};
