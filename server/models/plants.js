const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    light: String,
    water: String,
    userIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;