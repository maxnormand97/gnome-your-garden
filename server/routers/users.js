const express = require('express');
const User = require('../models/user');
const Plant = require('../models/plants');
const UserPlant = require('../models/userPlant');
const auth = require('../middleware/auth');
require('../db/mongoose');
const router = new express.Router();

// POST: create a new user
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
});

// POST: login a user
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send()
    }
});

// POST: logout a user
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
});

// POST add a plant to collection
router.post('/users/add_plant/:plant_id', auth, async (req, res) => {
    // based on the plant ID in the URL, find the plant
    const plant = await Plant.findById(req.params.plant_id);
    // add the plant to the user's plantIds array
    // check if plant is already in the user's plantIds array
    const plantIds = req.user.plantIds.map(plantId => plantId.toString());
    if (!plantIds.includes(plant._id.toString())) {
        req.user.plantIds.push(plant._id);
        const userPlant = new UserPlant({
            plantId: plant._id,
            userId: req.user._id,
            nickname: plant.name,
        });
        await userPlant.save();
    }
    // add userId to the plant's userIds array
    // only is the user is not already in the userIds array
    if (!plant.userIds.includes(req.user._id)) {
        plant.userIds.push(req.user._id);
    }
    // save the user
    await req.user.save();
    res.send(req.user);
})

  // GET: get all userPlants for a user
router.get('/users/plants', auth, async (req, res) => {
    // based on the users plantIds array, find all the plants
    const userPlants = await UserPlant.find({ userId: req.user._id });
    res.send(userPlants);
});

// GET: get a specific userPlant
router.get('/users/plants/:userPlantId', auth, async (req, res) => {
    const userPlant = await UserPlant.findById(req.params.userPlantId);
    res.send(userPlant);
});

// PATCH: remove plant from plants array
router.patch('/users/remove_plant/:plant_id', auth, async (req, res) => {
    // based on the plant ID in the URL, find the plant
    const plant = await Plant.findById(req.params.plant_id);
    // remove the plant from the user's plantIds array
    req.user.plantIds = req.user.plantIds.filter(plantId => plantId.toString() !== plant._id.toString());
    // remove the user from the plant's userIds array
    plant.userIds = plant.userIds.filter(userId => userId.toString() !== req.user._id.toString());
    // needs to destroy the userPlant record right
    await UserPlant.findOneAndDelete({ userId: req.user._id, plantId: plant._id });
    await req.user.save();
    res.send(req.user);
});

module.exports = router;