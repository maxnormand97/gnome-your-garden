const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000

// TODO: in general how can this be more secure?
app.use(cors())

app.get('/plants', (req, res) => {
  // TODO: set this up with basic json data
  // create some basic JSON data for plants
  // send that data as a response
  plants = [
    { name: 'Monstera', light: 'bright indirect', water: 'weekly' },
    { name: 'Snake Plant', light: 'low', water: 'every 2-6 weeks' },
    { name: 'Pothos', light: 'low to bright indirect', water: 'weekly' },
  ]
  res.json(plants)
});

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})

app.listen(port, () => {
      console.log('server listening on port 8000')
})

