// dependencies ===============
const express = require('express');
const mongoose = require('mongoose');
const app = express();
// env configuration ===============
require('dotenv').config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
// mongodb config ===============
const db = mongoose.connection;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:true });
// mongodb error / success ===============
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
// routes ===============
app.get('/', (req, res) => {
  res.send('hello world');
})
// listener ===============
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));