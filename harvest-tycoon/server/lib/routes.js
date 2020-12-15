const express = require('express');
const users = require('./controllers/users');
const plants = require('./controllers/plants');

let routes = express.Router();


routes.route('/community')
  .get(users.root)

routes.route('/community/:username')
  .get(users.returnOtherUsers)

routes.route('/users/:username')
  .get(users.byUser)
  .post(users.createUser)

routes.route('/users/:username/:password')
  .get(users.loginUser)

routes.route('/garden/:username')
  .get(plants.byUser)
  .post(plants.createPlant)

routes.route('/messages/:username')
  .get(plants.byUser)
  .post(plants.createPlant)

module.exports = routes;
