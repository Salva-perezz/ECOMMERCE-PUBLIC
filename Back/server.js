const express = require("express");
const app = express();
const db = require("./db")
const Routes = require("../Back/routes")
const bodyParser = require("body-parser")
const PORT = 3001;


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use("/api", Routes)

db.sync().then(() => {
    console.log('Data base synchronized!')
  app.listen(PORT, () => {
    console.log(`The server is listening at port ${PORT}`);
  });
});