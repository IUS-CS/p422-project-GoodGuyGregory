const Plant = require("../models/plant");
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
    },
    deletePlant: function (req, res) {
        const user = req.params.username;
        let plantToRemove = req.params.plant;
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
            console.log(`Removing ${plantToRemove} from ${user.username}'s garden: `);
            //  replace name with ID for mongoose removal
            user.garden.plants.forEach(plant => {
                if (plant.name === plantToRemove) {
                    plantToRemove = plant.id;
                }
            });
            user.garden.plants.id(plantToRemove).remove();

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