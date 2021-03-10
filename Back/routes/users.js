const express = require("express");
const router = express.Router();
const models = require("../models");
const User = models.user;
module.exports = router;

router.put("/:id", (req, res) => {
    User.update(req.body, {
        where: { id: req.params.id },
        returning: true,
    }).then((userEdited) => {
        res.status(201).json(userEdited[1][0].dataValues)
    }).catch(() => {
        res.sendStatus(500)
    })
})

