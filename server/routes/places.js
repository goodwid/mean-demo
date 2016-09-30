const express = require('express');
const router = express.Router();
const Place = require('../models/place');
const bodyParser = require('body-parser').json();

module.exports = router
  .get('/', (req, res, next) => {
    Place.find()
      .lean()
      .then(results => res.json(results))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    let id = req.params.id;
    Place.findById(id)
      .then(result => res.json(result))
      .catch(next);
  })
  .post('/', bodyParser, (req, res, next) => {
    new Place(req.body)
      .save()
      .then(result => res.json(result))
      .catch(next);
  });
