const express = require("express");
const router = express.Router();
const {User} = require("../models");


const jswt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  console.log("llega")
  User.create(req.body)
    .then((user) => {
      const token = jswt.sign({ id: user.id, email: user.email }, "ecommerce");

      res.status(201).json({token, user});
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email) res.status(500).send("Invalid email");
  if (!password) res.status(500).send("Invalid password");

  User.findOne({
    where: {
      email,
    },
  }).then((user) => {
    if (!user) return res.status(400).send("The user doesn't exist");

    if (!user.validPassword(password)) return res.status(401).send("Invalid credentials");

    const token = jswt.sign({ id: user.id, email: user.email }, "ecommerce");

    res.status(200).json({ token, user });
  });
});



router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((userEdited) => {
    userEdited = userEdited[1]
    res.status(200).json(userEdited)
  }).catch(() => {
    res.sendStatus(500)
  })
})

router.put("/", (req, res) => {
  User.update(req.body.isAdmin, { returning: true })
    .then((userIsAdminEdited) => {
      userIsAdminEdited = userIsAdminEdited[1]
      res.status(200).json(userIsAdminEdited)
    }).catch(() => {
      res.sendStatus(500)
    })
})

router.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users)
    }).catch(() => {
      res.sendStatus(500)
    })
})

router.delete("/", (req, res) => {
  User.delete({
    where: { id: req.body.id }
  })
    .then(() => {
      res.status(200).send("User Deleted")
    }).catch(() => {
      res.sendStatus(500)
    })
})

module.exports = router;