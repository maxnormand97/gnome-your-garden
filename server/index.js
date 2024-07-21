const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000
require('./db/mongoose')
const plantRouter = require('./routers/plants')
const userRouter = require('./routers/users')
app.use(express.json());
app.use(cors())
app.use(userRouter)
app.use(plantRouter)

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})

app.listen(port, () => {
      console.log('server listening on port 8000')
})
