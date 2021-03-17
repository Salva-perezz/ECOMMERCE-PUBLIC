const router = require("express").Router()
const { Type, Year, Country } = require('../models');

//TYPES

router.get('/types', (req, res) => {
   Type.findAll()
      .then(types => res.status(200).json(types))
});

router.post('/types', (req, res) => {
   Type.create(req.body)
      .then(typesCreated => res.status(201).json(typesCreated))
});

router.delete('/types/:id', (req, res) => {
   Type.destroy({
      id: req.params.id
   })
      .then(() => res.status(200).json())
});

router.put('/types/:id', (req, res) => {
   Type.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true
   }).then((typeUpdated) => {
      res.status(200).json(typeUpdated[1])
   });
})

//YEARS

router.get('/years/', (req, res) => {
   Year.findAll()
      .then(years => res.status(200).json(years))
});

router.post('/years', (req, res) => {
   Year.create(req.body)
      .then(yearCreated => res.status(201).json(yearCreated))
});

router.delete('/years/:id', (req, res) => {
   Year.destroy({
      id: req.params.id
   })
      .then(() => res.status(200).json())
});

router.put('/years/:id', (req, res) => {
   Year.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true
   }).then((yearUpdated) => {
      res.status(200).json(yearUpdated[1])
   });
})

//COUNTRIES

router.get('/countries', (req, res) => {
   Country.findAll()
      .then(countries => res.status(200).json(countries))
});

router.post('/countries', (req, res) => {
   Country.create(req.body)
      .then(countryCreated => res.status(201).json(countryCreated))
});

router.delete('/countries/:id', (req, res) => {
   Country.destroy({
      id: req.params.id
   })
      .then(() => res.status(200).json())
});

router.put('/countries/:id', (req, res) => {
   Country.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true
   }).then((countryUpdated) => {
      res.status(200).json(countryUpdated[1])
   });
})

module.exports = router;