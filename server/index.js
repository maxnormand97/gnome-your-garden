const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = 8000
// TODO: move this to its own router file
require('./db/mongoose')
const Plant = require('./models/plants')
app.use(express.json());

// TODO: in general how can this be more secure?
app.use(cors())

// TODO: need to extract this to its own router
app.get('/plants', (req, res) => {
  // TODO: set this up with basic json data
  // create some basic JSON data for plants
  // send that data as a response
  // create one plant object with name, light, and water
  // send that object as a response
  plants = [
    { name: 'Monstera', light: 'bright indirect', water: 'weekly' },
    { name: 'Snake Plant', light: 'low', water: 'every 2-6 weeks' },
    { name: 'Pothos', light: 'low to bright indirect', water: 'weekly' },
  ]
  res.json(plants)
});

// TODO: make this async
app.post('/plants', (req, res) => {
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

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})

app.listen(port, () => {
      console.log('server listening on port 8000')
})
