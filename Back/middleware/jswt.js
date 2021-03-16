const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const token = req.params.token;
  const data = jwt.verify(token, "ecommerce");

  if(data) {
    console.log(data)
    req.user = data;
    next()
}
};

const checkTokenBody = (req, res, next) => {
  console.log('legue')
  const token = req.body.token;
  const data = jwt.verify(token, "ecommerce");

  if(data) {
    req.user = data;
    console.log('PASE')
    next()
}
};

module.exports = { checkToken, checkTokenBody };