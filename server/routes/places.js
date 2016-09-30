const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();

let index = 2;
const placeData = [
  {
    name: "Portland",
    description: "We live here.",
    id: 0
  },
  {
    name: "Hayward",
    description: "I was born here.",
    id: 1
  }
];

module.exports = router
  .get('/', (req, res) => {
    res.json(placeData);
  })
  .get('/:id', (req, res) => {
    let id = req.params.id;
    let response = {error: 'Id not found'};
    if (id < placeData.length) {
      response = placeData[id];
    }
    res.json(response);
  })
  .post('/', bodyParser, (req, res) => {
    let data = req.body;
    data.id = index++;
    placeData.push(data);
    res.json(data);
  });
