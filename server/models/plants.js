const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    light: String,
    water: String,
    temperature: String,
    soilType: String,
    pruning: String,
    fertilization: String,
    habitat: String,
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'], // Enum declaration
        default: 'Medium'
    },
    userIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;