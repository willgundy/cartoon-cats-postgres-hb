const { Router } = require('express');
const Cats = require('../models/Cats');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingCat = await Cats.getCatById(id);
    res.json(matchingCat);
  })

  .get('/', async (req, res) => {
    const catsList = await Cats.getAll();
    res.json(catsList);
  });
