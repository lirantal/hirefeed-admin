'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Visitor = mongoose.model('Visitor'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Get a list of all visitors
 */
exports.getVisitors = function (req, res) {

  let id = req.query.companyId;
  let companyId = null;

  try {
    companyId = new mongoose.Types.ObjectId(id);
    console.log(companyId);
  } catch(e) {
    return res.status(500).send({
      message: errorHandler.getErrorMessage(e)
    });
  }

  Visitor.find({
      companyId: companyId
    }).
    limit(100).
    sort({ created: -1 }) .
    exec(function(err, results) {
      if (err) {
        res.status(500).send({
          message: errorHandler.getErrorMessage(err)
        });
      }

      res.status(200).send({
        visitors: results
      });

    });

};


/**
 * Create new Visitor entry
 */
exports.newVisitor = function (req, res) {

  let visitor = new Visitor({
    companyId: '' + req.body.companyId,
    name: '' + req.body.name,
    email: '' + req.body.email,
    mobile: '' + req.body.mobile
  });

  visitor.save(function(err) {
    if (err) {
      return res.status(500).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      return res.status(201).send(visitor);
    }
  })

};
