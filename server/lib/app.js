const express = require ('express');
const app = module.exports = express();
const logger = require('morgan')('dev');
const places = require('../routes/places');

const public = __dirname + '/../public';

app.use(logger);
app.use(express.static(public));
app.use('/api/places', places);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.code || 500).json({error: err.errors || 'Server error', msg: err.message});
});
