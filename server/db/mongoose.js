const mongoose = require('mongoose')
// TODO: change when setting up ENV vars
// const uri = `mongodb://localhost:27017/${process.env.NODE_ENV}`
mongoose.connect('mongodb://127.0.0.1:27017/gnome-your-garden');
