const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    light: String,
    water: String,
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;