const express = require('express');
const users = require('./controllers/users');
const plants = require('./controllers/plants');

let routes = express.Router();


routes.route('/community')
  .get(users.root)

routes.route('/users/:username')
  .get(users.byUser)
  .put(users.createUser)


routes.route('/garden/:user/:plant')
  .post(plants.byUser)

// routes.route('/garden/:plant')
//   .get(plant.byUser)

// routes.route('/plants/:user/:plant')
//   .post(plant.submit)

module.exports = routes;
