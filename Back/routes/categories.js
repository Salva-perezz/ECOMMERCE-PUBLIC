const router = require("express").Router()
const { checkToken } = require("../middleware/jswt");
const { Type, Year, Country } = require('../models');

router.get('/types', (req, res) => {
   Type.findAll()
   .then(types => res.status(200).json(types)) 
});

router.get('/years/', (req, res) => {
    Year.findAll()
    .then(years => res.status(200).json(years)) 
 });

 router.get('/countries', (req, res) => {
    Country.findAll()
    .then(countries => res.status(200).json(countries)) 
 });

module.exports = router;