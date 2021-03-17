const router = require("express").Router()
const { Review } = require("../models");

router.post('/', (req, res) => {
    Review.create(req.body)
        .then(reviewCreated => res.status(200).json(reviewCreated))
});

router.get('/id:', (req, res) => {
    Review.findAll({
        where: { productId: req.params.id }
    })
        .then(reviews => res.status(200).json(reviews))
});

module.exports = router;