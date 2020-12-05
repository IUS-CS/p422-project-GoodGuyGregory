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
        currentUsers.push(user.username);
      }
      res.json(currentUsers);
    })
  },
  byUser: (req, res) => {
    const section = req.params.class;

    User.findOne().bySection(section).exec((err, user) => {
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
  }
}
