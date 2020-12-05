const express = require('express');
const users = require('./controllers/users');


let routes = express.Router();

routes.route('/community')
  .get(users.root)

// routes.route('/plants/:plant')
//   .get(plants.byPlant)

// routes.route('/garden/:plant')
//   .get(plant.byUser)

// routes.route('/plants/:user/:plant')
//   .post(plant.submit)

module.exports = routes;
