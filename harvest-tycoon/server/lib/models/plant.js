const mongoose = require('mongoose');

const PlantSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lifestage: {
        type: String,
        required: true
    },
    lightPreferences: {
        type: String,
        required: true
    },
    wateringPreferences: {
        type: String,
        required: true
    },
});


const Plant = mongoose.model('Plant', PlantSchema);

module.exports = Plant;
