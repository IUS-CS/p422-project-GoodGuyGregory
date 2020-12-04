const User = require('../models/user');

module.exports = {
    root: (req, res) => {
        User.find().exec((err, classes) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            let ret = [];
            for (let klass of classes) {
                ret.push(klass.section);
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
    },
    findUsers: (req, res) => {
        const section = req.params.class;

    .findAll().bySection(section).exec((err, klass) => {
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
