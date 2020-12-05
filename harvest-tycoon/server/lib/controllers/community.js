const User = require('../models/user');

module.exports = {
    root: (req, res) => {
        User.find().exec((err, users) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            let ret = [];
            for (let user of users) {
                ret.push(user.username);
            }
            res.json(ret);
        })
    },
    byUser: (req, res) => {
        const section = req.params.class;

        User.findOne().bySection(section).exec((err, klass) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            if (!klass) {
                res.status(404);
                res.json({ 'err': 'class not found' });
                return;
            }
            console.log('sending class: ' + klass)
            res.json(klass);
        })
    }
}
