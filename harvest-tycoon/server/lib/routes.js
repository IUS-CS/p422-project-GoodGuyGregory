const express = require('express');
const users = require('./controllers/users');
const assignments = require('./controllers/plants');
const community = require('./controllers/community');

let routes = express.Router();

routes.route('/community')
  .get(community.findUsers)

// routes.route('/plants/:plant')
//   .get(plants.byPlant)

routes.route('/garden/:plant')
  .get(plant.byUser)

// routes.route('/plants/:user/:plant')
//   .post(plant.submit)

module.exports = routes;
