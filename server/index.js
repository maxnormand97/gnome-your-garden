const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000
require('./db/mongoose')
const plantRouter = require('./routers/plants')
app.use(express.json());

// TODO: in general how can this be more secure?
app.use(cors())
app.use(plantRouter)

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})

app.listen(port, () => {
      console.log('server listening on port 8000')
})
