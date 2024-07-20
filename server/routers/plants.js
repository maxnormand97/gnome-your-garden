const express = require('express');
const Plant = require('../models/plants');
require('../db/mongoose');
const router = new express.Router();

// TODO: make this async
// GET: all plants
router.get('/plants', (req, res) => {
    Plant.find({})
      .then((plants) => {
        res.send(plants)
      })
      .catch((error) => {
        res.status(500).send()
      })
});

  // TODO: make this async
  router.post('/plants', (req, res) => {
    console.log(req.body)
    const plant = new Plant(req.body)
    plant.save()
      .then(() => {
        res.status(201).send(plant)
      })
      .catch((error) => {
        res.status(400).send(error)
      })
  })

module.exports = router;