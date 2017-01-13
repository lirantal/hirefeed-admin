'use strict';

/**
 * Module dependencies
 */
let mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema,
  crypto = require('crypto'),
  validator = require('validator');

/**
 * Company Schema
 */
let CompanySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'name property is missing']
  },
  updated: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Company', CompanySchema);
