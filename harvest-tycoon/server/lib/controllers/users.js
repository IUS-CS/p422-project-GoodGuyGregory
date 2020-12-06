const User = require('../models/user');

module.exports = {
  // returns all users
  root: (req, res) => {
    User.find().exec((err, users) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      let currentUsers = [];
      for (let user of users) {
        currentUsers.push(user);
      }
      res.json(currentUsers);
    })
  },
  byUser: (req, res) => {
    const user = req.params.username;

    User.findOne().byName(user).exec((err, user) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      if (!user) {
        res.status(404);
        res.json({ 'err': 'user not found' });
        return;
      }
      console.log('sending user: ' + user)
      res.json(user);
    })
  },
  createUser: (req, res) => {
    const newUser = new User(req.body);
    newUser.save()
      .then(() => {
        res.sendStatus(204);
      })
      .catch(err => {
        res.status(400);
        res.json(err);
      });
  }
}
