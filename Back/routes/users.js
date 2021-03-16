const router = require("express").Router();
const { User } = require("../models");
const { Op } = require("sequelize")
const checkToken = require('../middleware/jswt');
const jswt = require("jsonwebtoken");

router.get("/all/:id", (req, res) => {
  User.findAll({
    where: { id: { [Op.ne]: req.params.id } } // Menos el del req.params.id
  })
    .then((users) => {
      res.status(200).json(users)
    }).catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
})

router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: ture
  }).then((userUpdated) => {
    res.status(200).json(userUpdated[1])
  }).catch((err) => {
    console.log(err)
    res.sendStatus(400)
  })
})

router.delete("/:id", (req, res) => {
  User.destroy({
    where: { id: req.params.id }
  })
    .then(() => {
      res.status(200).send()
    }).catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
})

router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => {
      const token = jswt.sign({ id: user.id, email: user.email }, "ecommerce");

      res.status(201).json({ token, user });
    }).catch((err) => {
      console.log(err)
      res.sendStatus(400)
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


router.post('/private', checkToken, (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;