const express = require('express');
const User = require('../models/user');
require('../db/mongoose');
const router = new express.Router();

// TODO: update when we have auth

// POST: create a new user
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
});

module.exports = router;