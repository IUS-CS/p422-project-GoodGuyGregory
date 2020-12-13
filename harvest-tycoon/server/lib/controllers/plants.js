const Plant = require("../models/plant");
const Plants = require("../models/plant");
const User = require('../models/user');

module.exports = {
    byUser: function (req, res) {
        // return all possible assignments from the model
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
            console.log(`sending ${user.username}'s garden: `)
            res.json(user.garden.plants);
        })
    },
    createPlant: function (req, res) {
        const user = req.params.username;
        const plant = new Plant(req.body);
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
            console.log(`adding ${plant.name} to ${user.username}'s garden: `)
            user.garden.plants.push(plant);
            user.save()
                .then(() => {
                    res.sendStatus(204);
                })
                .catch(err => {
                    res.status(400);
                    res.json(err);
                });
            res.json(user.garden.plants);
        })
    }
}