const { Router } = require('express');

const { cats } = require('../cats-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    let idCat;
    for (const cat of cats) {
      if (cat.id === req.params.id) {
        idCat = cat;
      }
    }

    return res.json(idCat);
  })
  .get('/', (req, res) => {
    const filteredCat = [];
    for (const cat of cats) {
      filteredCat.push({ id: cat.id, name: cat.name });
    }
    res.json(filteredCat);
  });
