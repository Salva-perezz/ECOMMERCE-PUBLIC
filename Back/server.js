const express = require("express");
const app = express();
const db = require("./db")
const PORT = 3001;

db.sync().then(() => {
    console.log('Data base synchronized!')
  app.listen(PORT, () => {
    console.log(`The server is listening at port ${PORT}`);
  });
});