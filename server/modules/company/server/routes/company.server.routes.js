'use strict';

module.exports = function (app) {

  let company = require('../controllers/company.server.controller');

  app.route('/api/company').get(company.getCompany);
  app.route('/api/company').post(company.newCompany);

};
