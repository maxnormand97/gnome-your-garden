const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGODB_URL);
const uri = `mongodb://localhost:27017/${process.env.NODE_ENV}`
mongoose.connect(process.env.MONGODB_URI || uri);