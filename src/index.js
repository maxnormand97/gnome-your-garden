const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000

app.use(cors())

app.get('/plants', (req, res) => {
  res.json({ message: 'I am the plants api' });
});

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})

app.listen(port, () => {
      console.log('server listening on port 8000')
})

