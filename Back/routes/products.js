const router = require("express").Router()
const { Op } = require("sequelize")
const { Product } = require("../models");


router.post("/", (req, res) => {
    Product.create(req.body)
        .then((product) => {
            res.status(201).json(product)
        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
})


router.get("/search", (req, res) => {
    if (req.query.c) { //Category
        Product.findAll({
            where: {
                [req.query.c]: { [Op.like]: `%${req.query.s}%` } //Category y Search
            }, offset: req.query.o, //skip n resultados
            limit: 12 // n resultados x fetch
        }).then((products) => {
            res.status(200).json(products)
        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
    }
    else {
        const search = req.query.s.split(" ").map((ob) => { return `%${ob.charAt(0).toUpperCase() + ob.slice(1)}%` }) //Mayuscula a la primera letra de cada item
        Product.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: { [Op.any]: search } } }, //arreglo de datos de busqueda
                    { brand: { [Op.like]: { [Op.any]: search } } }, // arreglo de datos de busqueda
                ],
            }, offset: req.query.o, //skip n resultados
            limit: 12 //n resultados x fetch
        }).then((products) => {
            res.status(200).json(products)
        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
    }
})

router.get("/", (req, res) => {
    Product.findAll({
        offset: req.query.l, //desde que n de registro muestro
        limit: 12
    }).then((products) => {
        res.status(200).json(products)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

router.get("/:id", (req, res) => {
    Product.findByPk(req.params.id)
        .then((product) => {
            res.status(200).json(product)
        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
})

router.put("/:id", (req, res) => {
    Product.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true
    }).then((product) => {
        res.status(200).json(product[1])
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

router.delete("/:id", (req, res) => {
    Product.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.status(200).json()
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})




module.exports = router;