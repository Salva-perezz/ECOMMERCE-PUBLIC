const router = require("express").Router()
const { Op } = require("sequelize")
const { Product, Country, Type, Year } = require("../models");
const { checkAdmin } = require('../middleware/isAdmin');

router.post("/", (req, res) => {
    Product.create(req.body)
        .then((productCreated) => {
            productCreated.setCountry(req.body.countryId)
                .then((productCreated) => { productCreated.setType(req.body.typeId) })
                .then((productCreated) => { productCreated.setYear(req.body.yearId) })
            res.status(201).json(productCreated)
        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
})

router.get("/search", (req, res) => {
    const skip = req.query.s
    const model = eval(req.query.m)
    if (!model) {
        const query = req.query.q.split(" ").map((ob) => { return `%${ob.charAt(0).toUpperCase() + ob.slice(1)}%` })
        Product.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: { [Op.any]: query } } },
                    { brand: { [Op.like]: { [Op.any]: query } } },
                ],
            },
            order: ["name"],
            offset: skip, //skip n resultados
            limit: 12 //n resultados x fetch
        }).then((products) => {
            res.status(200).json({ products, model: "Search Results" })
        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
    }
    else {
        const query = req.query.q
        Product.findAll({
            include: [
                { model: model, where: { name: query } },
            ],
            order: ["name"],
            offset: skip, //skip n resultados
            limit: 12 //n resultados x fetch
        }).then((products) => {
            res.status(200).json({ products, model })
        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
    }

})

router.get("/", (req, res) => {
    Product.findAll({
        order: ["name"],
        offset: req.query.l, //desde que n de registro muestro
        limit: 12,
    }).then((products) => {
        res.status(200).json(products)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

router.get("/:id", (req, res) => {
    Product.findOne({
        where: { id: req.params.id },
        include: [Country, Type, Year]
    })
        .then((product) => {
            product = {
                id: product.id,
                name: product.name,
                brand: product.brand,
                region: product.region,
                description: product.description,
                price: product.price,
                size: product.size,
                discount: product.discount,
                urlPicture: product.urlPicture,
                country: product.country.name,
                type: product.type.name,
                year: product.year.name
            }
            res.status(200).json(product)
        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
})

router.put("/:id/:isAdmin", checkAdmin, (req, res) => {
    Product.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true
    }).then((productUpdated) => {
        res.status(200).json(productUpdated[1])
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

router.delete("/admin/delete/:id", (req, res) => {
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