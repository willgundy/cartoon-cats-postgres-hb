const { Router } = require('express');
const { cats } = require('../../data/cats.js');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingCat = cats.find((cat) => cat.id === id);
    res.json(matchingCat);
  })

  .get('/', (req, res) => {
    const catsList = cats.map(({ id, name }) => ({ id, name }));
    res.json(catsList);
  });
