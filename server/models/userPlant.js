const mongoose = require('mongoose');

const userPlantSchema = new mongoose.Schema({
    plantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plant',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    nickname: String,
    location: String,
    lastWatered: Date,
    lastFertilized: Date,
    lastPruned: Date,
    needsWater: {
        type: Boolean,
        default: false,
    },
    needsFertilizer: {
        type: Boolean,
        default: false,
    },
    needsPruning: {
        type: Boolean,
        default: false,
    },
    phLevel: Number,
    notes: String,
    health: {
        type: String,
        enum: ['Healthy', 'Sick', 'Dead'],
        default: 'Healthy',
    },
});

const UserPlant = mongoose.model('UserPlant', userPlantSchema);

module.exports = UserPlant;