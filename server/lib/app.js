const express = require ('express');
const app = module.exports = express();
const logger = require('morgan')('dev');
const places = require('../routes/places');

const public = __dirname + '/../public';

app.use(logger);
app.use(express.static(public));
app.use('/api/places', places);
