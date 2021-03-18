const router = require("express").Router()
const { checkAdmin } = require("../middleware/isAdmin");
const { Type, Year, Country } = require('../models');

//TYPES

router.get('/types', (req, res) => {
   Type.findAll()
      .then(types => res.status(200).json(types))
});

router.post('/types/:isAdmin', checkAdmin, (req, res) => {
   Type.findOne({
      where: { name: req.body.name }
   }).then((type) => {
      if (!type) {
         Type.create(req.body)
            .then(typeCreated => res.status(201).json(typeCreated))
      } else {
         res.status(400).send("Category already exists")

      }
   })
})

router.delete('/types/:id/:isAdmin', (req, res) => {
   Type.destroy({
      where: { id: req.params.id }
   })
      .then(() => res.status(200).json())
      .catch(err => {
         console.log(err)
         res.sendStatus
      })
})

router.put('/types/:id/:isAdmin', checkAdmin, (req, res) => {
   Type.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true
   }).then((typeUpdated) => {
      res.status(200).json(typeUpdated[1])
   });
})

//YEARS

router.get('/years', (req, res) => {
   Year.findAll()
      .then(years => res.status(200).json(years))
});

router.post('/years/:isAdmin', checkAdmin, (req, res) => {
   Year.findOne({
      where: { name: req.body.name }
   }).then((year) => {
      if (!year) {
         Year.create(req.body)
            .then(yearCreated => res.status(201).json(yearCreated))
      } else {
         res.status(400).send("Category already exists")
      }
   })
})


router.delete('/years/:id/:isAdmin', (req, res) => {
   Year.destroy({
      where: { id: req.params.id }
   })
      .then(() => res.status(200).json())
});

router.put('/years/:id/:isAdmin', checkAdmin, (req, res) => {
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

router.post('/countries/:isAdmin', checkAdmin, (req, res) => {
   Country.findOne({
      where: { name: req.body.name }
   }).then((country) => {
      if (!country) {
         Country.create(req.body)
            .then(countryCreated => res.status(201).json(countryCreated))
      } else {
         res.status(400).send("Category already exists")
      }
   })
});

router.delete('/countries/:id/:isAdmin', (req, res) => {
   Country.destroy({
      where: { id: req.params.id }
   })
      .then(() => res.status(200).json())
});

router.put('/countries/:id/:isAdmin', checkAdmin, (req, res) => {
   Country.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true
   }).then((countryUpdated) => {
      console.log(countryUpdated[1]);
      res.status(200).json(countryUpdated[1])
   });
})

module.exports = router;