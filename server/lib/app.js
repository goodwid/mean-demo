const express = require ('express');
const app = module.exports = express();
const logger = require('morgan')('dev');

const public = __dirname + '/../public';

app.use(logger);
app.use(express.static(public));
