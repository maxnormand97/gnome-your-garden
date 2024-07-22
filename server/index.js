const app = require('./app')

// rest of your code...
const port = process.env.PORT || 8000
app.listen(port, () => {
//     console.log(process.env)
    console.log('Running application')
})